// const { default: axios } = require("./axios");

import axios from "./axios"





// // 헤더에 토큰을 추가하는 함수
// const addTokenToHeader = (token) => {
//   // axios의 기본 설정에 토큰을 추가합니다.
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// // 함수는 토큰을 가져와 헤더에 추가한 후, 인증이 필요한 요청
// // 인증이 필요한 요청을 보내는 함수
// const sendAuthenticatedRequest = async () => {
//   try {
//     // 로그인 후에 받은 토큰을 가져옵니다.
//     // 토큰 가져오기
//     let token = localStorage.getItem('X-AUTH_TOKEN'); // localStorage 사용 시
//     // let token = sessionStorage.getItem('token'); // sessionStorage 사용 시

//     // 로그인 요청 후 토큰 저장
//     // localStorage.setItem('X-AUTH_TOKEN', token); // localStorage 사용 시
//     // sessionStorage.setItem('token', receivedToken); // sessionStorage 사용 시




//     // 토큰 삭제
//     localStorage.removeItem('X-AUTH_TOKEN'); // localStorage 사용 시
//     // sessionStorage.removeItem('token'); // sessionStorage 사용 시

//     // 헤더에 토큰을 추가합니다.
//     addTokenToHeader(token);

//     // 인증이 필요한 요청을 보냅니다.
//     const response = await axios.get('/user/login');
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };


// 로그인 메소드
export async function loginToken (state, val) {
  await axios.post(process.env.BACKEND_URL+'/user/login', val).then(
    (res) => {
      localStorage.setItem('accessToken', res.data.data.accessToken)
      localStorage.setItem('refreshToken', res.data.data.refreshToken)
      localStorage.setItem('expiredTime', res.data.data.cur_time)
      axios.defaults.headers.common['x-access-token'] = res.data.data.accessToken
    },
    (err) => {
    }
  )
}

//api를 보내 AccessToken과 RefresToken, 만료 기간을 반환받고 LocalStorage에 저장한다.
//AccessToken의 경우 axios 동작 시 헤더에 기본으로 붙도록 설정한다.

// api호출 시 선호출될 메소드
export async function setToken (state) {
  // HEADER에 토큰 설정
  axios.defaults.headers.common['x-access-token'] =  localStorage.getItem('accessToken')
  // 만료시간이 지났을 경우, RefreshToken을 이용하여 AccessToken 재발급
  var expiredTime = await this.$moment.utc(localStorage.getItem('expiredTime'))
  var diffTime = await this.$moment.duration(expiredTime.diff(this.$moment()))
  if (diffTime < 10000){
      axios.defaults.headers.common['x-refresh-token'] = localStorage.getItem('refreshToken')
      await axios.get(process.env.BACKEND_URL+'/api/users/reissue').then(
        (res) => {
          localStorage.setItem('accessToken', res.data.data.accessToken)
          localStorage.setItem('expiredTime', res.data.data.cur_time)
          axios.defaults.headers.common['x-access-token'] =  localStorage.getItem('accessToken')
        },
        (err) => {
            // Login 페이지로 리디렉션
        }
      ) 
  }
  return new Promise(function(resolve, reject) {
      resolve(true)
  });
}

// 로그인이 필요한 api호출 직전에 해당 전역 메소드를 동작시켜 미리 만료시간에 가까운지 확인하고, 
// 가까운 경우 재발급을 받아 다시 LocalStorage에 저장, 헤더로 설정한다.


//https://han-um.tistory.com/17
// https://www.daleseo.com/js-jwt/
// https://www.youtube.com/watch?v=nI8PYZNFtac

// npm i jsonwebtoken
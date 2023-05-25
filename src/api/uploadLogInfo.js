import axios from "axios";

export async function uploadLoginInfo(userInfo){

  axios.post('https://login-99bcf-default-rtdb.asia-southeast1.firebasedatabase.app/', userInfo)
  .then(response => {
    // 로그인 성공 시 수행할 작업
    console.log(response.data);
  })
  .catch(error => {
    // 로그인 실패 시 수행할 작업
    console.error(error);
  });


  // console.log(userInfo);
  // const data = new FormData();
  // data.append("file", userInfo)
  // data.append("upload_preset", process.env.REACT_APP_NARS_PRESET);
 
  // return fetch(process.env.REACT_APP_NARS_URL, {
  //   method: "POST",
  //   body: data
  // })
  // .then( res => res.json())
  // .then( data => console.log(data) )
}



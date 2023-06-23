// import axios from "axios";
import jwt from "jsonwebtoken";

export async function checkMemberInfo(userInfo){
  const { memberId, password } = userInfo
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const data = JSON.stringify(userInfo);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };

  
  // 토큰 발급하기
  const token = jwt.sign({ memberId, password }, "X-AUTH_TOKEN");
  console.log(token);

  // 토큰 검증하기
  const verified = jwt.verify(token, "X-AUTH_TOKEN");
  console.log(verified);
  
  return await fetch("/user/login", requestOptions)
  .then( response => response.text())
  .then( result => {
    if(result) {
      if(result.memberId === userInfo.memberId ) {
        alert(`반갑습니다😍. ${result.memberId}님 로그인이 되었습니다.`)
        window.location.href="/"
      }
      } else {
        alert('정보가 없습니다. 아이디와 패스워드를 확인해주세요');
      }
    })
    .catch(error => console.log('error', error));
  };


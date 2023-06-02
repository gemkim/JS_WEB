export async function joinMember(userJoin){
  const data = JSON.stringify(userJoin);
  console.log(data);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };
  
  return await fetch("/user/signUp", requestOptions)
  .then( response => response.json())
  .then( result => {
    console.log(result);
    if(result) {
      alert(`가입 완료되었습니다다. ${userJoin.memberName}님 반갑습니다.`)
      // window.location.href="/"
      }
    })
    .catch(error => console.log('error', error));
  };

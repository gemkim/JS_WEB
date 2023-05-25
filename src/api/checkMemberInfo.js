
export async function checkMemberInfo(userInfo){
  const data = JSON.stringify(userInfo);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };

  return await fetch("/user/login", requestOptions)
    .then( response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  };

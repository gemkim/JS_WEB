export async function joinMember(userJoin){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var data = JSON.stringify(userJoin);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
    redirect: 'follow'
  };

fetch("/user/signUp", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  };

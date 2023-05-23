
export async function uploadLoginInfo(userInfo){
  
  const User = [{
    member_id : userInfo.email,
    password : userInfo.uid,
    admin_yn : false,
  }]
  console.log(User);

  // return fetch(process.env.REACT_APP_NARS_URL, {
  //   method: "POST",
  //   body: User
  // })
  // .then( res => res.json())
  // .then( data => console.log(data) )
}

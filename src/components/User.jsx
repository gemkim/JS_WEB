import React, { useContext } from 'react';
import { ContextStore } from '../context/store';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "150px"
  },
}
const User = () => {
  //useContext를 사용해서 Store를 등록해줍니다.
  const UserInfo = useContext(ContextStore)
  
    return (
        <div style={style.container}>
            이름 : {UserInfo.name}<br />
            나이 : {UserInfo.age}
        </div>
    );
}

export default User;
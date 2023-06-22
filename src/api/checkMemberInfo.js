import axios from "axios";

export const checkMemberInfo = async (refresh_token) => {
  return await axios
    .post('/user/login', {
      refresh: refresh_token,
    })
    .then((response) => {
      return response.data.access;
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};

export const checkAccessToken = async (refresh_token) => {
  if (axios.defaults.headers.common["X-AUTH_TOKEN"] === undefined) {
    return await checkMemberInfo(refresh_token).then((response) => {
      return response;
    });
  } else {
    return axios.defaults.headers.common["X-AUTH_TOKEN"].split(" ")[1];
  }
};
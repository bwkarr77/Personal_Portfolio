import React, { useState } from "react";
import axios from "axios";

export const useGetInfo = async (baseUrl, subText) => {
  const result = await axios
    .get(`${baseUrl}${subText}`)
    .then(({ data }) => data);
  return result;
};

//====custom hook below.  Works with DonationsList:
//....const [token, setToken] line
export const useGetToken = (baseApi, subText, loginTest, tokenReturn) => {
  const [token, setToken] = useState(tokenReturn);
  axios
    .post(`${baseApi}${subText}`, loginTest)
    .then(results => {
      // console.log(results.data.token);
      let tokenReturn = results.data.token;
      console.log(tokenReturn);
      setToken(tokenReturn);
      // setUserToken(results.data.token);
      // console.log(userToken);
    })
    .catch(err => console.log(err));
  return [token];
};

export const getInfo = (testApi, subText) => {
  axios
    .get(`${testApi}${subText}`)
    .then(results => console.log(results.data.data))
    .catch(err => console.log(err));
};

//HOW TO:
/*
const tokenName = { username: "<username>", password: "<password>" };

useEffect(() => {
  axios.post(apiAdd, { tokenName }).then(results => {});
});
*/

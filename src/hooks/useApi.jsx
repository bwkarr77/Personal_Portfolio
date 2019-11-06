import { useState, useEffect } from "react";
import axios from "axios";
import { assignmentExpression } from "@babel/types";

const useGetApi = baseUrl => {
  const [getApiData, setGetApiData] = useState();

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(res => {
        console.log(res.data);
        setGetApiData(res.data);
      })
      .catch(err => console.log(err));
  });

  return getApiData;
};

export default useGetApi;

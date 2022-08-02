import axios from "axios";
import React, { useEffect, useState } from "react";
import { token } from "../constants/token";
import {BASE_URL} from "../constants/url"

export const useRequest = (url) => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
      axios
        .get(`${BASE_URL}${url}`, {
          headers:{
            authorization: token
          }
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }, [url]);
    return data
  };
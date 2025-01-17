import axios, { Method } from "axios";

interface AxiosProps {
  method: Method;
  url: string;
  headers: any;
  data: any;
  msg?: string;
}

const BASE_URL = "http://15.165.250.252:3001";
export const ACCESS_TOKEN = "fiml_access_token";

export const requestWithOutAccessToken = ({
  method,
  url,
  headers,
  data,
  msg
}: AxiosProps) => {
  return axios({
    method,
    url: BASE_URL + url,
    headers,
    data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(`${msg} 에러`, err)
      throw new Error(err);
    });
};

export const requestWithAccessToken = ({
  method,
  url,
  headers,
  data,
  msg
}: AxiosProps) => {
  return axios({
    method,
    url: BASE_URL + url,
    headers: { ...headers, authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` },
    data,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(`${msg} 에러`, err)
      throw new Error(err);
    });
};

// requestWithAccessToken({
//     method: "DELETE",
//     url: "/sdf",
//     headers: { "Content-Type": "application/json" },
//     data: { a: "" } }).then((res)=>{
//         const res : 타입 = res;
//     }).catch((err)=>{
//         return;
//     })

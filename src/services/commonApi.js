import axios from "axios";

export const commonApi = async (httpMethod, url, reqBody, reqHeader) => {
  const reqConfig = {
    method: httpMethod,
    url: url,
    data: reqBody,
    headers: reqHeader
      ? reqHeader
      : { "Content-Type": "application/json" },
  };

 return await axios(reqConfig).then((res)=>{
  return res
 })
 
 .catch((err)=>{
  throw err
 })
}
export default commonApi 
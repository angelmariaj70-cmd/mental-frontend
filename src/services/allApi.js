import {commonApi} from "./commonApi";
import { serverUrl } from "./serverUrl";
export const registerApi = async (reqBody) => {
  return await commonApi(
    "POST",
    `${serverUrl}/api/register`,
    reqBody
  );
};

// Login API
export const loginApi = async (reqBody) => {
  return await commonApi(
    "POST",
    `${serverUrl}/api/login`,
    reqBody
  );
};
  export const googleloginApi = async (reqBody) => {
  return await commonApi(
    "POST",
    `${serverUrl}/api/googlelogin`,
    reqBody
  );
};
//get all questions
export const viewAllQuestions = async (reqHeader) => {
  return await commonApi(
    "GET",
    `${serverUrl}/api/getallquestions`,
    "",reqHeader
  );
};
//get all doctors
export const viewAllDoctors = async (reqHeader) => {
  return await commonApi(
    "GET",
    `${serverUrl}/api/getallDoctors`,
    "",reqHeader
  );
};
//get single doctor 
export const asingleDoctor = async (id, reqHeader) => {
  return await commonApi(
    "GET",
    `${serverUrl}/api/getaDoctor/${id}`, 
    "",
    reqHeader
  );
};
export const makeBooking = async (id, reqBody, reqHeader) => {
  return await commonApi(
    "PUT",
    `${serverUrl}/api/makepayment/${id}`, 
    reqBody,
    reqHeader
  );
};

export const getAllBookingsApi = async (reqHeader) => {
  return await commonApi(
    "GET",
    `${serverUrl}/api/getBooked`,
    "",
    reqHeader
  );
};
export const getAlluserApi = async ( reqHeader) => {
  return await commonApi(
    "GET",
    `${serverUrl}/api/users`, 
    "",
    reqHeader
  );
};
export const getAllDoctorsApi = async ( reqHeader) => {
  return await commonApi(
    "GET",
    `${serverUrl}/api/alldoctors`, 
    "",
    reqHeader
  );
};
export const updateDoctorProfileApi = async (id, reqBody, reqHeader) => {
  return await commonApi(
    "PUT",
    `${serverUrl}/api/updateProfile/${id}`, 
    reqBody,
    reqHeader
  );
};
export const rejectadoctor = async (id,  reqHeader) => {
  return await commonApi(
    "DELETE",
    `${serverUrl}/api/rejectdoctor/${id}`, 
    "",
    reqHeader
  );
};
export const approveDoctorApi = async (
  id,
  reqHeader
) => {

  return await commonApi(
    "PUT",
    `${serverUrl}/api/approvedoctor/${id}`,
    "",
    reqHeader
  );
};
export const viewHomeDoctors = async () => {
  return await commonApi(
    "GET",
    `${serverUrl}/api/intro`,
    "",""
  );
};
export const updateAdminProfile = async (id, reqBody, reqHeader) => {
  return await commonApi(
    "PUT",
    `${serverUrl}/api/admin/${id}`, 
    reqBody,
    reqHeader
  );
};
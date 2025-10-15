import { del, get, patch, post } from "./api";

export const postUserRegister = (data: any) => post("/accounts/register", data);
export const postCompany = (data: any) => post("/we/companies", data);
export const postUserSingIn = (data: any) => post("/accounts/auth/token", data);
export const fetchCompany = async () => {
  try {
    const res = await get("/we");
    return { success: true, ...res };
  } catch (error) {
    return { success: false };
  }
};
export const fetchUser = ()=>get("/me")

export const postPlanSubscription = (data:any)=> post('/we/subscriptions', data)
export const patchPlanSubscription = (uid:string, data:any)=> patch(`/we/subscriptions/${uid}`, data)

//forgot password
export const postForgotPassword = (data:any) =>post("/accounts/forget-password/sent-link", data);
export const patchPassword = (uid:string, token:string, data:any) =>patch(`/accounts/forget-password/${uid}/${token}`, data);

export const postDemo = (data:any)=>post('/public/live-demo', data)

//verify email
export const postOTP = ()=>post('/accounts/email-verifications/send-otp',{})
export const verifyOTP = (data:any)=>post('/accounts/email-verifications',data)

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import env from "../config/env";

const app = initializeApp(JSON.parse(env.VITE_FIREBASE_CONFIG));
export const auth = getAuth(app)
const analytics = getAnalytics(app);

export const sendOTP = async (phoneNumber) => {
  if (!phoneNumber) return
  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
    alert("OTP đã được gửi!");
    return confirmationResult
  } catch (error) {
    console.error("Lỗi gửi OTP:", error);
    alert("Không gửi được OTP. Kiểm tra số điện thoại.");
  }
}

export const verifyOTP = async (confirmationResult, otp) => {
  try {
    const result = await confirmationResult.confirm(otp)
    const user = result.user
    const token = await user.getIdToken()
    alert("OTP chính xác")
    return token
  } catch (error) {
    console.error("Sai OTP:", error);
    alert("OTP không đúng!");
  }
}

export const generateReCaptcha = () => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible', // hoặc 'normal' để hiện captcha
      callback: (response) => {
        console.log("reCAPTCHA solved");
      }
    });
  }
}

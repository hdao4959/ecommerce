import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBftx7o6zAiu-T-s9pTh-YxOjM-WdaI9W4",
  authDomain: "ecommerce-bf5af.firebaseapp.com",
  projectId: "ecommerce-bf5af",
  storageBucket: "ecommerce-bf5af.firebasestorage.app",
  messagingSenderId: "678250300982",
  appId: "1:678250300982:web:d3920390d0f3b504c9fa97",
  measurementId: "G-L8E6FRV5PX"
};
const app = initializeApp(firebaseConfig);
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

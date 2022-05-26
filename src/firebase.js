// https://firebase.google.com/docs/web/setup?authuser=0&hl=ko

/*NOTE: FIREBASE SETTING
firebase why?
    - 호스팅에 사용
    - 데이터베이스 사용
    - 클라우드


1) 프로젝트이름 / 구글 애널리스틱 추가 / 미국
2) 웹app / appname(프로젝트이름) /호스팅설정체크 /앱등록
3) firebase SDK추가
npm install firebase

->here is SDK
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO - Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMs3oLM3x0TxURLPge6jV5HSsXumh4wJ4",
  authDomain: "challenge-77583.firebaseapp.com",
  projectId: "challenge-77583",
  storageBucket: "challenge-77583.appspot.com",
  messagingSenderId: "386124661481",
  appId: "1:386124661481:web:74157755ebc8f6ee3fe678",
  measurementId: "G-6YNTBZ6P71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
-> SDK DONE

4) FIREBASE CLI설치 - Firebase 호스팅으로 사이트를 호스팅하려면 Firebase CLI(명령줄 도구)가 필요
npm install -g firebase-tools

5) FIREBASE 호스팅에 배포 

*/

/*TODO: FIREBASE CONNECT
*/

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDMs3oLM3x0TxURLPge6jV5HSsXumh4wJ4",
    // apiKey: process.env.FIREBASE_APIKEY,
    authDomain: "challenge-77583.firebaseapp.com",
    projectId: "challenge-77583",
    storageBucket: "challenge-77583.appspot.com",
    messagingSenderId: "386124661481",
    appId: "1:386124661481:web:74157755ebc8f6ee3fe678",
    measurementId: "G-6YNTBZ6P71"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

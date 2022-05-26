/* eslint-disable */
/*NOTE: SETTING
 - index.css -> css 초기화 코드 추가
 - naming convention : BEM방식 사용
 - 아이콘사용위해 material-ui설치 : 
      npm install @material-ui/core
      npm install '@material-ui/icons'
    -> 설치에러 원본텍스트의 알수없는 토큰 대안 -> npm install --save "@material-ui/core"
  - material-ui 아이콘목록 list 검색 url
    https://v4.mui.com/components/material-icons/
*/
/*DONE: Header
  -3부분으로 나누어서 마크업 (로고/서치바/정보창)
 */
/*DONE:Home
  container -> 디자인영역확보
  배경
  3 rows -> 상품화면

  Product component->각각의 상품카드는 새로운 컴포넌트생성 
  
  디자인 완료후 product component -> data props

  Array.prototype.fill() -> The fill() method changes all elements in an array to a static value
    from a start index (default 0) to an end index (default array.length).
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

  const array1 = [1, 2, 3, 4];
  array1.fill(0, 2, 4)
  // expected output: [1, 2, 0, 0]

  10 * 10 배열
  const h = 10;
  const w = 10;
  const grid = Array(h * w)
  [ <1 empty items>, <2>, ....<100> ] //결과

  fill()로 각 자리를 채우기
  const grid = Array(h * w).fill() //fill 인자가 없으므로 undefine 할당됨
  [undefined,........, undefined]

  map()으로 각 자리 index에 해당하는 값 할당하기
  const grid = Array(h * w).fill().map((arr, i) => {  // (arr: 현재값, i:인덱스)
    return i
})

//Array(h * w).fill()의 각 값(undefined)을 map()을 통해 하나씩 불러와서 i로 return
//map()은 각각 return한 값으로 이루어진 배열을 생성함
//생성된 배열이 grid가 됨!!
[
   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
  36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, ... 99]

Array(45)를 콘솔 창에 쳐보면 텅텅 빈 45개의 배열이 생성
여기서 배열의 모든 공간에 숫자 1을 넣고 싶다면, Array(45). fill(1)이라고 작성하면 된다.
fill() 메서드는 arr.fill(value [, start [, end]]) 의 구문
value : 배열을 채울 값 / start : 시작 인덱스 / end : 끝 인덱스 ( end가 3이면, 3은 포함되지 않는다 )

만약 같은 숫자가 아닌 1부터 45까지 모든 숫자를 출력
Array(45). fill(). map((v, i)=> i+1); 을 작성한다
*/
/*DONE: CHECKOUT PAGE-장바구니 page
NPM INSTALL react-router-dom
routing 기능 설치!

Link로 각 링크연결 

subtotal 컴포넌트 
react-currency-format 설치
https://www.npmjs.com/package/react-currency-format

data fetching

HOME에서
add basket버튼 누르면 -> react context API / REDUX  -> 장바구니를 UPDATE시킨다.

context file -> provider 
index.js provider
reducer.js
product button onclick -> dispatch item into data layer



*/
/*TODO:LOGIN PAGE
-route설정
-link설정
-login page 디자인 및 함수설정

-firebase 연동
콘솔이동 프로젝트선택
authentication-시작하기 /로그인방법->이메일,비번 / 이메일비밀번호 사용설정 on

firebase -> file 세팅 sdk, db, auth

-login page - > register logic
useHistory 옜날버전 지금은 useNavigate

*/
import React, { useEffect } from 'react';
import "./App.css"

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/Login/Login';
import { useStateValue } from './context/StateProvider';

import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    //will run only once when the app component loads

    onAuthStateChanged(auth, (authUser)=>{
      console.log("User is >>", authUser);

      if (authUser){
        // user logged in
        dispatch({
          type : "SET_USER",
          user : authUser
        })
      }else{
        //user us logged out
        dispatch({
          type : "SET_USER",
          user : null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <Home/>
          }/>
          <Route path="/checkout" element={
            <Checkout/>
          }/>
          <Route path="/login" element={
            <Login/>
          }/>
        </Routes>
      </div>
    </Router>
  )
}
export default App;

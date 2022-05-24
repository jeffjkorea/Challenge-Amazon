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
/*TODO: Header
  -3부분으로 나누어서 마크업 (로고/서치바/정보창)
  
    */

import React from 'react';
import "./App.css"
import Header from './components/Header/Header';
function App() {
  return (
    <div className='app'>
      <h1>hello, let's build amazon :🚀</h1>
      {/* Header */}
      <Header/>
      {/* Home */}
    </div>
  )
}
export default App;

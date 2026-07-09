import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../cont/Home'

// 라우터란?
// 사용자가 입력한 주소를 감지하는 역할을 하며, 
// 여러 환경에서 동작할 수 있도록 여러 종유의 라우터 컴포넌트를 제공
// 라우터 기본 구성
{/* 
<Router> --> App.tsx에서 최상위 요소로 사용
  <Routes>
    <Route path='/컴포넌트 실행위치' element={<컴포넌트 />} />
  </Routes>
</Router> 

AppRoutes의 구성
1. routeList에 자바스크립트 객체 형태로 패스와 라우터 하고자 하는 컴포넌트 정의
2. routeList를 Routes안에 Route 형태로 뿌려준다(작성한다)
3. 결국 routeList에 입력한 값들을 아래처럼 만들어 내기위해 AppRoutes 컴포넌트를 작성하였다
<Routes>
    <Route path='/컴포넌트 실행위치1' element={<컴포넌트1 />} />
    <Route path='/컴포넌트 실행위치2' element={<컴포넌트2 />} />
    <Route path='/컴포넌트 실행위치3' element={<컴포넌트3 />} />
    <Route path='/컴포넌트 실행위치4' element={<컴포넌트4 />} />
    <Route path='/컴포넌트 실행위치5' element={<컴포넌트5 />} />
    ...
  </Routes>
*/}

const AppRoutes: React.FC = () => {
    const routeList = [
        // ************************ 사용법 ************************
        // { path: '/위치(url)', element: <컴포넌트명 />},
        { path: '/', element: <Home />},

    ]
    return (
        <Routes>
            {
                routeList.map((route, idx) => (
                    <Route key={idx} {...route} />
                ))
            }
        </Routes>
    )
}

export default AppRoutes
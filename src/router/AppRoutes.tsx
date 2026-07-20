import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../cont/Home'
import Community from '../cont/community/Community'
import Inquiry from '../cont/inquiry/Inquiry'
//import Management from '../cont/management/Management'

import Member from '../cont/member/Member'
import Notice from '../cont/notice/Notice'
import Order from '../cont/order/Order'
import Revenue from '../cont/revenue/Revenue'
import Login from '../cont/member/Login'
import Signup from '../cont/member/Signup'

import Sal from '../cont/product/Product'
import UpCommunityForm from '../cont/community/UpCommunityForm'

import Inquirecomm from '../cont/inquiry/Inquirecomm'
import InquireList from '../cont/inquiry/InquireList'
import InquireDetail from '../cont/inquiry/InquireDetail'

import Admin from '../cont/admin/Admin'
import Members from '../cont/admin/Members'
// import Management from "../cont/management/Management";
import CommunityDetail from "../cont/community/CommunityDetail";
import Form from "../cont/management/Form";
import List from "../cont/management/List";
import Detail from "../cont/management/Detail";
import Form2 from "../cont/management/Form2";
import InquireForm from '../cont/inquiry/InquireForm'
import NoticeB from '../cont/notice/NoticeB'
import NoticeJoin from '../cont/notice/NoticeJoin'

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
        // 도서 재고 관리
        {path: "/",element: <Home />,},
        { path: "/management", element: <Form /> },
        { path: "/management/form", element: <Form /> },
        { path: "/management/list", element: <List /> },
        { path: "/management/detail/:bookId", element: <Detail /> },
        { path: "/management/form2/:bookId", element: <Form2 /> },
        { path: '/member', element: <Member />},
        // { path: '/notice', element: <Notice />},
        { path: '/order', element: <Order />},
        { path: '/user/login', element: <Login/>},
        { path: '/user/signup', element: <Signup />},
        { path: '/revenue', element: <Revenue/>},
        { path: '/community', element: <Community/>},
        {path: '/notice', element: <NoticeB />},
        {path: '/admin/noticejoin', element: <NoticeJoin />},
        { path: '/community/detail/:num', element: <CommunityDetail />},
        { path: '/communityform', element: <UpCommunityForm/>},     
        { path: '/inquiry', element: <InquireList/>},
        { path: '/Inquirecomm', element: <Inquirecomm/>},
        { path: '/InquireForm', element: <InquireForm/>},
        { path: '/InquireDetail', element: <InquireDetail/>},

        { path: '/admin/member', element: <Members />},
        { path: '/admin', element: <Admin />},
        
        { path: '/community', element: <Community />},
        { path: '/communityform', element: <UpCommunityForm/>}


        // <Route path="/login" element={<Login />} />
        // <Route path="/signup" element={<Signup />} />
        // <Route path="/dashboard" element={<Dashboard />} />


    ];
    return (
        <Routes>
            {
                routeList.map((route, idx) => (
                    <Route key={idx} {...route} />
                ))}
            
        </Routes>
    );
};

export default AppRoutes;

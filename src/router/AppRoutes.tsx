import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../cont/Home'
// <Route path='/signup' element={<Signup />} />

const AppRoutes: React.FC = () => {
    const routeList = [
        // { path: '/nav주소', element: <컴포넌트명 />},
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
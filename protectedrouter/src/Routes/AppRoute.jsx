import React, {useState} from 'react';
import { Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';
import AboutPage from '../Pages/AboutPage';
import Protected from '../Pages/Protected';
import ProfilePage from '../Pages/ProfilePage';
import LoginPage from '../Pages/LoginPage'

function AppRoute({isLoggedIn, myFunc}) {
  const [loginFlag, setLoginFlag] = useState(true)
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={ <LoginPage loginFlag={loginFlag} isLoggedIn={isLoggedIn} myFunc={myFunc} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/profile"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <ProfilePage isLoggedIn={isLoggedIn} />
            </Protected>
          }
        />

      </Routes>
  )
}

export default AppRoute

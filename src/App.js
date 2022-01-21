import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import UserProfile from './components/UserProfile'
export default function App() {

    const [accountBalance, setAccountBalance] = React.useState( 14568.27 )
    const [currentUser, setCurrentUsere] = React.useState( {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
    } )

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home accountBalance={accountBalance} />} />
                <Route exact path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} />} />
            </Routes>
        </BrowserRouter>
    );
}



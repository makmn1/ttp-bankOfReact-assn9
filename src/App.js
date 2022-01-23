import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'
import Debits from './components/Debits'
export default function App( props ) {

    const [accountBalance, setAccountBalance] = React.useState( 14568.27 )
    const [currentUser, setCurrentUser] = React.useState( {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
    } )

    const mockLogIn =( logInInfo )=> {
        setCurrentUser( { ...currentUser, userName: logInInfo.userName } )
        console.log(currentUser)
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/ttp-bankOfReact-assn9" element={<Home accountBalance={accountBalance} />} />
                <Route exact path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} />} />
                <Route exact path="/login" element={<LogIn user={currentUser} mockLogIn={mockLogIn} />} />
                <Route exact path="/debits" element={<Debits accountBalance={accountBalance} />} />
            </Routes>
        </BrowserRouter>
    );
}



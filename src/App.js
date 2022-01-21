import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'
export default function App( props ) {

    const [accountBalance, setAccountBalance] = React.useState( 14568.27 )
    const [currentUser, setCurrentUsere] = React.useState( {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
    } )
     const mockLogIn =( logInInfo )=> {
  
        setCurrentUsere( { ...currentUser, userName: logInInfo.userName } )
        console.log(currentUser)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home accountBalance={accountBalance} />} />
                <Route exact path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} />} />
                <Route exact path="/login" element={<LogIn user={currentUser} mockLogIn={mockLogIn} {...props} />} />
            </Routes>
        </BrowserRouter>
    );
}



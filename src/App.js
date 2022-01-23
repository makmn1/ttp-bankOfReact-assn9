import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'
import Debits from './components/Debits'
import Credits from './components/Credits'
export default function App( props ) {

    const [accountBalance, setAccountBalance] = React.useState( 14568.27 )
    const [currentUser, setCurrentUser] = React.useState( {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
    } )

    const increaseBalance = (credit) => {
        setAccountBalance(prevAccountBalance => {
            return (prevAccountBalance + credit)
        })
    }

    const deductBalance = (debit) => {
        setAccountBalance(prevAccountBalance => {
            return (prevAccountBalance - debit)
        })
    }


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
                <Route exact path="/debits" element={<Debits accountBalance={accountBalance} deductBalance={deductBalance} />} />
                <Route exact path="/credits" element={<Credits accountBalance={accountBalance} increaseBalance={increaseBalance} />} />
            </Routes>
        </BrowserRouter>
    );
}



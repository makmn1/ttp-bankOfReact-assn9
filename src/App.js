import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'
import Debits from './components/Debits'
import Credits from './components/Credits'
export default function App( props ) {

    const [accountBalance, setAccountBalance] = React.useState( 500 )
    const [currentUser, setCurrentUser] = React.useState( {
        userName: 'Bob Loblaw',
        memberSince: '08/23/99',
    } )
    const [credits, setCredits] = React.useState([])
    const [debits, setDebits] = React.useState([])

    const increaseBalance = (credit) => {
        credit = Number.parseInt(credit)
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

    React.useEffect(function() {

        fetch("https://moj-api.herokuapp.com/debits")
            .then(response => response.json())
            .then(data => setDebits(data))
            .catch(error => console.log(error))

        fetch("https://moj-api.herokuapp.com/credits")
            .then(response => response.json())
            .then(data => setCredits(data))
            .catch(error => console.log(error))

    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/ttp-bankOfReact-assn9" element={<Home accountBalance={accountBalance} />} />
                <Route exact path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} />} />
                <Route exact path="/login" element={<LogIn user={currentUser} mockLogIn={mockLogIn} />} />
                <Route exact path="/debits" element={<Debits accountBalance={accountBalance} deductBalance={deductBalance} debits={debits} setDebits={setDebits} />} />
                <Route exact path="/credits" element={<Credits accountBalance={accountBalance} increaseBalance={increaseBalance} credits={credits} setCredits={setCredits}/>} />
            </Routes>
        </BrowserRouter>
    );
}



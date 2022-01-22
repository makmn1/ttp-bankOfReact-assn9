import React from 'react'
import AccountBalance from "./AccountBalance";
import { Link } from 'react-router-dom';
export default function Home( props ) {
    return (
        <div className="home">
            <h1>Bank of React</h1>
            <Link to="/userProfile">User Profile</Link>
            <Link to="/login">User Login</Link>
            <AccountBalance accountBalance={props.accountBalance} />
            <img src="https://thefinanser.com/wp-content/uploads/2021/09/bank.jpeg" alt="bank" />
        </div>
    )
}
import React from 'react'
import { Navigate } from 'react-router-dom';

export default function LogIn(props) {

    const [userInfo, setUserInfo] = React.useState({
        user: {
            userName: '',
            password: '',
        },
        redirect: false
    })


    const handleChange = (e) => {
        const inputValue = e.target.value
    
        setUserInfo({...userInfo, user: { userName: inputValue } })


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.mockLogIn(userInfo.user)
        setUserInfo({ redirect: true })
    }


    if (userInfo.redirect) {    
        console.log("sdafsdf")
        return ( < Navigate to = "/userProfile" / > )
        
    }

   
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" name="userName" onChange={handleChange} value={userInfo.userName} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <button>Log In</button>
            </form>
        </div>
    )
}


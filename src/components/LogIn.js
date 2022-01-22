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


    const handleChange = (event) => {

        const updatedUser = userInfo.user
        const inputField = event.target.name
        const inputValue = event.target.value
        updatedUser[inputField] = inputValue

        setUserInfo(prevUserInfo => ({
            ...prevUserInfo,
            user : updatedUser
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.mockLogIn(userInfo.user)
        setUserInfo({ redirect: true })
    }

    if (userInfo.redirect) {
        return  <Navigate to = "/userProfile" />
    }

    return (
        <div>
            {/*{userInfo.redirect && <Navigate to = "/userProfile" />}*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" name="userName" onChange={handleChange} value={userInfo.user.userName} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handleChange} value={userInfo.user.password}/>
                </div>
                <button>Log In</button>
            </form>
        </div>
    )
}


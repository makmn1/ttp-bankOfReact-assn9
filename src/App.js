import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home'

export default function App() {

    const [accountBalance, setAccountBalance] = React.useState(14568.27)

    return (
    <BrowserRouter>
        <Routes>
            <Route exact path ="/" element={<Home accountBalance={accountBalance}/>} />
        </Routes>
    </BrowserRouter>
  );
}



import React from "react"
import { Link } from "react-router-dom"
import AccountBalance from "./AccountBalance";

export default function Debits(props) {

    const [viewDebits, setViewDebits] = React.useState(false)
    const [viewAccountBalance, setViewAccountBalance] = React.useState(false)
    const [debits, setDebits] = React.useState([])

    React.useEffect(function() {
        fetch("https://moj-api.herokuapp.com/debits")
            .then(response => response.json())
            .then(data => setDebits(data))
            .catch(error => console.log(error))

    }, [])

    const debitElements = debits.map(debit => {

        const day = debit.date.substring(8, 10)
        const month = debit.date.substring(5, 7)
        const year = debit.date.substring(0, 4)

        return (
            <div key={debit.id} className="debit">
                <p className="debitDetail" style={{fontWeight: "bold"}}>{debit.description}</p>
                <p className="debitDetail">${debit.amount}</p>
                <p className="debitDetail">{month}/{day}/{year}</p>
            </div>
        )
    })

    function debitViewHandler() {
        setViewDebits(prevViewDebits => !prevViewDebits)
    }
    function balanceViewHandler() {
        setViewAccountBalance(prevViewBalance => !prevViewBalance)
    }

    return (

        <div className="debitsPage">
            <header className="debitsHeader">
                <h1>DEBITS</h1>
                <div className="debitButtons">
                    <button onClick={debitViewHandler}>{viewDebits ? "Hide Debits" : "Show Debits"}</button>
                    <button onClick={balanceViewHandler}>{viewAccountBalance ? "Hide Balance" : "Show Balance"}</button>
                </div>
            </header>
            <main>
                {viewAccountBalance && <AccountBalance accountBalance={props.accountBalance} />}
                {viewDebits && <h2 className="debitsTitle">Recent Transactions</h2> }
                {viewDebits && debitElements}
                <Link to="/ttp-bankOfReact-assn9" className="returnHome">Click here to return to your homepage</Link>
            </main>
        </div>
    )

}
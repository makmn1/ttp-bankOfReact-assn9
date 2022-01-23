import React from "react"
import AccountBalance from "./AccountBalance";
import {Link} from "react-router-dom";
import {nanoid} from "nanoid";

export default function Credits(props) {

    const [viewCredits, setViewCredits] = React.useState(false)
    const [viewAccountBalance, setViewAccountBalance] = React.useState(false)
    const [addCreditFormElements, setAddCreditFormElements] = React.useState({
        description: "",
        amount: ""
    })
    const [credits, setCredits] = React.useState([])

    React.useEffect(function() {
        fetch("https://moj-api.herokuapp.com/credits")
            .then(response => response.json())
            .then(data => setCredits(data))
            .catch(error => console.log(error))

    }, [])

    const creditElements = credits.map(credit => {

        const day = credit.date.substring(8, 10)
        const month = credit.date.substring(5, 7)
        const year = credit.date.substring(0, 4)

        return (
            <div key={credit.id} className="debit">
                <p className="debitDetail" style={{fontWeight: "bold"}}>{credit.description}</p>
                <p className="debitDetail">${credit.amount}</p>
                <p className="debitDetail">{month}/{day}/{year}</p>
            </div>
        )
    })

    function changeHandler(event) {
        const id = nanoid()
        const date = new Date().toISOString()
        setAddCreditFormElements(prevAddCreditFormElements => ({
            ...prevAddCreditFormElements,
            [event.target.name] : event.target.value,
            id,
            date
        }))
    }

    const addCreditHandler = (event) => {
        event.preventDefault()
        setCredits(prevCredits => {
            return [addCreditFormElements, ...prevCredits]
        })
        props.increaseBalance(addCreditFormElements.amount)
    }

    function creditViewHandler() {
        setViewCredits(prevViewCredits => !prevViewCredits)
    }
    function balanceViewHandler() {
        setViewAccountBalance(prevViewBalance => !prevViewBalance)
    }

    return (

        <div className="debitsPage">
            <header className="debitsHeader">
                <h1>CREDITS</h1>
                <div className="debitButtons">
                    <Link to="/ttp-bankOfReact-assn9" className="returnHome">Click here to return to your homepage</Link>
                    <div className="toggleButtons">
                        <button onClick={creditViewHandler}>{viewCredits ? "Hide Credits" : "Show Credits"}</button>
                        <button onClick={balanceViewHandler}>{viewAccountBalance ? "Hide Balance" : "Show Balance"}</button>
                    </div>

                    <form className="addDebitForm" onSubmit={addCreditHandler}>
                        <input
                            placeholder="Credit Description"
                            name="description"
                            value={addCreditFormElements.description}
                            onChange={changeHandler}
                        />
                        <input
                            placeholder="Credit Amount"
                            name="amount"
                            value={addCreditFormElements.amount}
                            onChange={changeHandler}
                        />
                        <button type="submit">Add Credit</button>
                    </form>
                </div>
            </header>

            <main>
                {viewAccountBalance && <AccountBalance accountBalance={props.accountBalance} />}
                {viewCredits && <h2 className="debitsTitle">Recent Credit Transactions</h2> }
                {viewCredits && creditElements}
            </main>
        </div>
    )

}
import React from "react"
import AccountBalance from "./AccountBalance";
import {Link} from "react-router-dom";


export default function Credits() {
    const [viewCredits, setViewCredits] = React.useState(false)
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

    function creditViewHandler() {
        setViewCredits(prevViewCredits => !prevViewCredits)
    }

    return (
        <div className="debitsPage">
            <header className="debitsHeader">
                <h1>CREDITS</h1>
                <Link to="/ttp-bankOfReact-assn9" className="returnHome">Click here to return to your homepage</Link>
                <div>
                    <button onClick={creditViewHandler}>{viewCredits ? "Hide Credits" : "Show Credits"}</button>
                </div>
            </header>


            <main>
                {viewCredits && <h2 className="debitsTitle">Recent Credit Transactions</h2> }
                {viewCredits && creditElements}

            </main>
        </div>
    )

}
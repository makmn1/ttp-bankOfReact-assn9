import React from 'react'

export default function AccountBalance(props) {
    return(
        <h2 className="balance">
            Balance: {props.accountBalance}
        </h2>
    )
}
import { ethers } from 'ethers';
import React from 'react'


const Home = (props) => {

    return (
        <div>
            <h1>Welcome</h1>
            <p>Connected to : {props.currentAccount}</p>
            <p>Current Network : {props.currentNetwork}</p>
            <p>Token Name : {props.networkName} </p>

            <p>Balance :  {props.infoBalance} {props.networkSymbol} </p>
            <p>Total Supply : {props.totalSupply} {props.networkSymbol}</p>
            <form onSubmit={props.handleTransfer} >
                <div className='card d-inline-flex p-2' style={{ width: "35%" }}>
                    <h3>Transfer Tokens</h3>
                    <label> Receiver Address</label>
                    <input className='form-control' type="text" value={props.receiverAddress} onChange={props.handleOnAdChange} required={true} />
                    <label>Amount</label>
                    <input className='form-control' type="number" min="0" value={props.text} onChange={props.handleOnAmountChange} required={true} />

                    <button className='btn btn-primary my-3' >Transfer funds</button>
                </div>
            </form>
        </div>
    )
}

export default Home
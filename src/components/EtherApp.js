import React from 'react'
import { useState, useEffect } from "react";
import { ethers } from "ethers";
const EtherApp = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    const [provider, setProvider] = useState(null);

    const connectWalletHandler = () => {
        if (window.ethereum && defaultAccount == null) {
            // set ethers provider
            setProvider(new ethers.providers.Web3Provider(window.ethereum));

            // connect to metamask
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((result) => {
                    setConnButtonText("Wallet Connected");
                    setDefaultAccount(result[0]);
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        } else if (!window.ethereum) {
            console.log("Need to install MetaMask");
            setErrorMessage("Please install MetaMask browser extension to interact");
        }
    };

    useEffect(() => {
        if (defaultAccount) {
            provider.getBalance(defaultAccount).then((balanceResult) => {
                setUserBalance(ethers.utils.formatEther(balanceResult));
            });
        }
    }, [defaultAccount]);

    return (
        <div>
            <div className="card">
                <div className="card-header">Test blockchain</div>
                <div className="card-body">
                    <h3 className="card-title">Connect your MetaMask </h3>
                    <p className="card-text"></p>
                    <button className="btn btn-primary" onClick={connectWalletHandler}>
                        {connButtonText}
                    </button>
                    <hr></hr>
                    <div className="accountDisplay">
                        <h3>Address Wallet: </h3>
                        <p>
                            <i>{defaultAccount}</i>
                        </p>
                        <div className="balanceDisplay">
                            <h3>Balance: {userBalance} Eth</h3>
                        </div>
                        {errorMessage}
                    </div>
                </div>
            </div>
        </div>

    );
};


export default EtherApp
import React, { useState, useEffect } from 'react'

const Login = (props) => {
    const [isConnecting, setIsConnecting] = useState(false);
    const [provider, setProvider] = useState(window.ethereum)
    const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false)
    useEffect(() => {
        setProvider(detectProvider)
    }, [])
    useEffect(() => {
        if (provider) {
            if (provider !== window.ethereum) {
                console.error("Not window.ethereum . Do you have multiple wallets installed ?")
            }
            setIsMetamaskInstalled(true)
        }
    }, [provider])
    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;

        } else if (window.web3) {
            provider = window.web3.currentProvider
        } else {
            window.alert("No ethereum browser detected ! check out metamask")
        }
        return provider
    }
    const onLoginHandler = async () => {
        const provider = detectProvider();
        if (provider) {
            if (provider !== window.ethereum) {
                console.error("Not window.ethereum . Do you have multiple wallets installed ?")
            }
            setIsConnecting(true);
            await provider.request({
                method: "eth_requestAccounts"
            })
            props.onLogin(provider)
        }
    }
    return (
        <div>
            <div className="row my-5">
                <div className="col d-flex justify-content-center">
                    {isMetamaskInstalled && <button type="button" className="btn btn-primary " onClick={onLoginHandler}>
                        {!isConnecting && "Connect"}
                        {isConnecting && "Connecting..."}</button>}
                    {!isMetamaskInstalled && <a href='/'>Install MetaMask</a>}
                </div>
            </div>
        </div>
    )
}
export default Login
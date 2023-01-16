import './App.css';
import Login from './components/Login';
import Home from './components/Home';
// import EtherApp from './components/EtherApp';
import { useState, useEffect } from 'react';
// import Web3 from "web3";
// import BigNumber from 'big-number/big-number';
import { ethers } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
function App() {
  const abi = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "_decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }]
  const address = "0x1C3E3DF567986DdbE5bf2f4dd63934A495f0041c"
  // const receiverAddress = "0xDD8703720aB03bf0738037a2d4F84b3bECf353Fb"
  const [text, setText] = useState('')
  const [receiverAddress, setRecieverAddress] = useState('')
  // const entendedText = text*10**18
  // const entendedText = parseUnits(text.toString());
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [provider, setProvider] = useState(window.ethereum);
  const [chainId, setChainId] = useState(null);
  const [signer, setSigner] = useState(null)
  const [web3, setWeb3] = useState(null);
  const [balance, setBalance] = useState(null)
  const [infoBalance, setInfoBalance] = useState(null)
  const [networkName, setNetworkName] = useState(null)
  const [networkSymbol, setNetworkSymbol] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null)
  const [contractInstance, setContractInstance] = useState(null)
  const NETWORKS = {
    1: "Ethereum Main Network",
    3: "Ropsten Test Network",
    4: "Rinkeby Test Network",
    5: "Goerli Test Network",
    42: "Kovan Test Network",
    97: "Binance Smart Chain Network"
  };


  const onLogin2 = async () => {
    const newProvider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = newProvider.getSigner();

    const currentaccount = await signer.getAddress()
    const chainid = await signer.getChainId();
    const transactionsContract = new ethers.Contract(address, abi, signer)
    console.log(transactionsContract)
    const newBalance = await transactionsContract.balanceOf(currentaccount)
    const totalSupply = await transactionsContract.totalSupply()
    const totalSupplyMini = ethers.utils.formatEther(totalSupply)
    const name = await transactionsContract.name()
    const symbol = await transactionsContract.symbol()
    const bal = ethers.utils.formatEther(newBalance)
    if (currentaccount.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (currentaccount !== currentAccount) {
      setCurrentAccount(currentaccount);
      setProvider(newProvider);
      setSigner(signer)
      setChainId(chainid);
      setIsConnected(true);
      setBalance(newBalance)
      setInfoBalance(bal)
      setNetworkName(name)
      setNetworkSymbol(symbol)
      setTotalSupply(totalSupplyMini)
      setContractInstance(transactionsContract)
    }
    // console.log(transactionsContract)

    // console.log(await transactionsContract.transfer(receiverAddress, parseUnits("1")))
  }


  // const onLogin = async (provider) => {
  //   const web3 = new Web3(provider);

  //   const accounts = await web3.eth.getAccounts();
  //   const chainId = await web3.eth.getChainId();
  //   const balance = await web3.eth.getBalance(accounts[0]);
  //   const contractInstance = new web3.eth.Contract(abi, address);
  //   const infoBalance = await contractInstance.methods.balanceOf(accounts[0]).call();
  //   const fromWei = Web3.utils.fromWei(infoBalance);
  //   const networkName = await contractInstance.methods.name().call();
  //   const networkSymbol = await contractInstance.methods.symbol().call()
  //   const totalSupply = await contractInstance.methods.totalSupply().call()
  //   const totalSupplyFromWei = Web3.utils.fromWei(totalSupply)
  //   if (accounts.length === 0) {
  //     console.log("Please connect to MetaMask!");
  //   } else if (accounts[0] !== currentAccount) {
  //     setCurrentAccount(accounts[0]);
  //     setProvider(provider);
  //     setWeb3(web3);
  //     setChainId(chainId);
  //     setCurrentAccount(accounts[0]);
  //     setIsConnected(true);
  //     setBalance(balance)
  //     setInfoBalance(fromWei)
  //     setNetworkName(networkName)
  //     setNetworkSymbol(networkSymbol)
  //     setTotalSupply(totalSupplyFromWei)
  //     setContractInstance(contractInstance)
  //   }
  // }

  console.log(signer)
  const handleOnAmountChange = (event) => {
    setText(event.target.value)
  }
  const handleOnAdChange = (event) => {
    setRecieverAddress(event.target.value)
  }
  const handleTransfer = async (e) => {
    e.preventDefault()
    const transferFunds = await contractInstance.transfer(receiverAddress, parseUnits(text.toString()))
  }

  useEffect(() => {
    const handleAccountsChanged = async () => {
      const newProvider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = newProvider.getSigner();
      const currentaccount = await signer.getAddress()
      if (currentaccount.length === 0) {
        onLogout();
      } else if (currentaccount !== currentAccount) {
        setCurrentAccount(currentaccount)
      }
    }

    if (isConnected){
      provider.removeListener("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (isConnected) {
        provider.removeListener("accountsChanged", handleAccountsChanged);
        // provider.removeListener("chainChanged", handleChainChanged);
      }
    }
  },[isConnected])
  // useEffect(() => {
  //   const handleAccountsChanged = async (accounts) => {
  //     const web3Accounts = await web3.eth.getAccounts();
  //     const contractInstance = await new web3.eth.Contract(abi, address);
  //     const infoBalance = await contractInstance.methods.balanceOf(accounts[0]).call();
  //     const fromWei = await Web3.utils.fromWei(infoBalance);
  //     if (accounts.length === 0) {
  //       onLogout();
  //     } else if (accounts !== currentAccount) {
  //       setCurrentAccount(accounts);
  //       setInfoBalance(fromWei)


  //     }
  //   };
  //   const handleChainChanged = async (chainId) => {
  //     const web3ChainId = await web3.eth.getChainId();
  //     setChainId(web3ChainId);
  //   };

  //   if (isConnected) {
  //     provider.on("accountsChanged", handleAccountsChanged);
  //     provider.on("chainChanged", handleChainChanged);

  //   }

    // return () => {
    //   if (isConnected) {
    //     provider.removeListener("accountsChanged", handleAccountsChanged);
    //     provider.removeListener("chainChanged", handleChainChanged);
    //   }
    // };
    // eslint-disable-next-line
  // }, [isConnected]);

  // useEffect(() => {
  //   const handleAccountsChanged = async (currentaccount) => {
  //     const web3Accounts =  await signer.getAddress()
  //     const contractInstance = new ethers.Contract(address, abi, signer)
  //     const infoBalance = await contractInstance.balanceOf(currentAccount)
  //     const fromWei =  ethers.utils.formatEther(infoBalance);
  //     if (currentaccount.length === 0) {
  //       onLogout();
  //     } else if (currentaccount !== currentAccount) {
  //       setCurrentAccount(currentaccount);
  //       setInfoBalance(fromWei)
  //     }
  //   };
  //   const handleChainChanged = async () => {
  //     const web3ChainId = await web3.eth.getChainId();
  //     setChainId(web3ChainId);
  //   };
  //   if (isConnected) {
  //     provider.on("accountsChanged", handleAccountsChanged);
  //     provider.on("chainChanged", handleChainChanged);

  //   }
  //   return () => {
  //     if (isConnected) {
  //       provider.removeListener("accountsChanged", handleAccountsChanged);
  //       provider.removeListener("chainChanged", handleChainChanged);
  //     }
  //   };
  //   // eslint-disable-next-line
  // }, [isConnected]);
  const onLogout = () => {
    setIsConnected(false);
    setCurrentAccount(null);
  };
  const getCurrentNetwork = (chainId) => {
    return NETWORKS[chainId];
  };
  return (
    <div className="App">
      <div>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">MetaMask Connection</a>
            <p> {currentAccount}</p>
          </div>
        </nav>
      </div>
      {/* <EtherApp/> */}
      {!isConnected && <Login onLogin={onLogin2} onLogout={onLogout} />}
      {isConnected && <Home currentAccount={currentAccount}
        currentNetwork={getCurrentNetwork(chainId)} balance={balance} infoBalance={infoBalance} networkName={networkName} networkSymbol={networkSymbol} totalSupply={totalSupply}
        text={text} handleOnAmountChange={handleOnAmountChange} handleOnAdChange={handleOnAdChange} handleTransfer={handleTransfer} receiverAddress={receiverAddress} address={address} abi={abi} />}
    </div>
  );
}

export default App;
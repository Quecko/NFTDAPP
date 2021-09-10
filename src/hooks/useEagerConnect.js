import { useEffect } from 'react'
import useAuth from './useAuth'

const ConnectorNames =  {
    Injected : "injected",
    WalletConnect : "walletconnect",
    BSC : "bsc"
}


const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {
    const item = window.localStorage.getItem("flag")
    const connectorId = window.localStorage.getItem("connectorId")
    const inj = window.localStorage.getItem("injected")


    // Disable eager connect for BSC Wallet. Currently the BSC Wallet extension does not inject BinanceChain
    // into the Window object in time causing it to throw an error
    // TODO: Figure out an elegant way to listen for when the BinanceChain object is ready
    // if (item === 'true') {
    //   console.log("enter",item)
    //   login("injected")
    // }
    // if (item === 'true') {
    //   console.log("enter",item)
    //   login("injected")
    // }
    if(item=='true'){

    
    if(inj==='injected'){

      if (connectorId && connectorId !== ConnectorNames.BSC) {
        login(connectorId)
      }
    }
    else{
      if (connectorId && connectorId !== ConnectorNames.BSC) {
        login(item)
      }
    }
  }
  }, [login])
}

export default useEagerConnect

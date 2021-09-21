
import { useEffect } from 'react'
import useAuth from './useAuth'
// const ConnectorNames =  {
//   WalletConnect : "walletconnect",
//   Injected : "injected",
//   BSC : "bsc"
// }
const useEagerConnect = () => {
  const { login } = useAuth()
  useEffect(() => {
    const item= window.localStorage.getItem("flag"); 
    const injected= window.localStorage.getItem("injected"); 
    const walletconnect= window.localStorage.getItem("walletconnect");
    const connectorId = window.localStorage.getItem("connectorId")
       if (item === 'true' && injected=== "injected") {
           login("injected")
         }
         else if(item === 'true' && walletconnect=== "walletconnect"){
           login("walletconnect")
         }
         else{
            login("injected")
         }
  }, [login])
}
export default useEagerConnect

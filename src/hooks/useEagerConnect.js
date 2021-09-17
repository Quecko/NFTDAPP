// import { useEffect } from 'react'
// import useAuth from './useAuth'

// const ConnectorNames =  {
//     Injected : "injected",
//     WalletConnect : "walletconnect",
//     BSC : "bsc"
// }


// const useEagerConnect = () => {
//   const { login } = useAuth()

//   useEffect(() => {
//     const item = window.localStorage.getItem("flag")
//     const connectorId = window.localStorage.getItem("connectorId")
//     const inj = window.localStorage.getItem("injected")

//     if(item=='true'){

    
//     if(inj==='injected'){

//       if (connectorId && connectorId !== ConnectorNames.BSC) {
//         login(connectorId)
//       }
//     }
//     else{
//       if (connectorId && connectorId !== ConnectorNames.BSC) {
//         login(item)
//       }
//     }
//   }
//   }, [login])
// }

// export default useEagerConnect

import { useEffect } from 'react'
import useAuth from './useAuth'
const ConnectorNames =  {
  WalletConnect : "walletconnect",
  Injected : "injected",
  BSC : "bsc"
}
const useEagerConnect = () => {
  const { login } = useAuth()
  useEffect(() => {
    const item= window.localStorage.getItem("flag"); 
    const connectorId = window.localStorage.getItem("connectorId")
       if (item === 'true') {
         if(connectorId && connectorId !== ConnectorNames.BSC){
           login(connectorId)
         }
         else if(connectorId && connectorId !== ConnectorNames.BSC){
           login(connectorId)
         }
         else{
            login(connectorId)
         }
    }
  }, [login])
}
export default useEagerConnect

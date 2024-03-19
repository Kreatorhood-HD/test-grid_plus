import logo from './logo.svg';
import './App.css';
import { WagmiProvider,useSignTypedData } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TestSig from './TestSig'


import { config } from './wagmiConfig'

const queryClient = new QueryClient()

function App() {

  return (
      <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
       <TestSig/>
          </QueryClientProvider>
      </WagmiProvider>
  );
}

export default App;

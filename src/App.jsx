import { useState } from 'react'
import InputBox from './customHooks/InputBox'
import useCurrencyInfo from './customHooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount,setAmount] = useState(0);
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const currencyInfo = useCurrencyInfo(from)
  const [convertedAmount,setConvertedAmount] = useState(0)
  const options = Object.keys(currencyInfo)
  const swap =()=>{
    const tooo = to
    const frommm = from
    setFrom(tooo)
    setTo(frommm)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
 return (
    <div
        className="w-full h-screen overscroll-y-auto overscroll-x-auto flex flex-wrap justify-center items-center  object-fill"
        style={{
            backgroundImage: `url("https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            oncurrencyChange={(currency)=> setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amo)=>setAmount(amo)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To" 
                            amount={convertedAmount}
                            currencyOptions={options}
                            oncurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toLocaleUpperCase()} to {to.toLocaleUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App

import { useState } from "react"
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("inr")
  const [to,setTo]=useState("usd")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from) 
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/14907378/pexels-photo-14907378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
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
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            // className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none text-white bg-emerald-800 hover:bg-emerald-900 focus:ring-4 focus:ring-emerald-800 font-medium rounded-md text-sm px-2 py-0.5 me-2 mb-2 dark:bg-emerald-700 dark:hover:bg-emerald-800 dark:focus:ring-emerald-900"
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
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable  //so that user isn't allowed to change amount in "to" part
                        />
                    </div>
                    <button type="submit" className="w-full focus:outline-none text-white bg-emerald-800 hover:bg-emerald-900 focus:ring-4 focus:ring-emerald-800 font-medium rounded-lg text-lg px-4 py-3 me-2 mb-2 dark:bg-emerald-700 dark:hover:bg-emerald-800 dark:focus:ring-emerald-900"
                    >
                           
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
 
};

export default App

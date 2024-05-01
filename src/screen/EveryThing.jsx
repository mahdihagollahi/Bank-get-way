import Transaction from "./Transaction"
import { BrowserRouter , Router, Route, Link, Routes } from 'react-router-dom'
import { IoCard } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import InputCard from './ImputCard'
import { useState } from "react"
// import Timer from "./Commponent/Timer"
function EveryThing() {
 
  const [List , setList]=useState([]);


 function  sendToAdsCard (infomation){
    const copy = [...List]
          copy.push(infomation)
          setList(copy)
           console.log(List)
 }
  return (
    <div>
    
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8"  />
            <span className='"self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>AceCoinpay</span>
          </a>
          <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto">
             <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
             <li>
             <Link style={{color:""}} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-50" to='/'>Home</Link>

             </li>
             <li>
             <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/InputCard">InputCard</Link>

             </li>
             <li>
             <Link  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/Transaction" >Transaction</Link>

             </li>
             {/* <li>
             <Link  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/Timer" >Transaction</Link>

             </li> */}
             </ul>
          </div>
        </div>
     
      </nav>

     

    <Routes>
    {/* <Route path="/Timer" element={<Timer/>} /> */}
    <Route path="/InputCard"   element={<InputCard sendToAdsCard={sendToAdsCard}/>} />
    <Route path="/Transaction" element={<Transaction/>} />
    </Routes>
   
    <div className="container flex w-11  ml-60 text-center mr-96  align-center justify-center   text-white p-10 px-10 border-solid border-2 rounded-2xl bg-white ">
          {List.map((item ,index)=>{
            return(
              // <div  className="">
              //    <p className=" text-black">{item.Number}</p>
              //    <p className=" text-black">{item.Cvv2}</p>
              //    <p className=" text-black">{item.Year}</p>
              //    <p className=" text-black">{item.Mounth}</p>
              //    <p className=" text-black">{item. Password}</p>
              //    <p className=" text-black">{item.Inventory}</p>
                 
               
              // </div>


              <div class="bg-white min-h-screen flex justify-center items-center">
        <div class="space-y-16">
            <div class="w-96 h-56 m-auto bg-white rounded-xl relative text-black shadow-2xl transition-transform transform hover:scale-110">
            
                {/* <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"/> */}
                
                <div class="w-full px-8 absolute top-8">
                    <div class="flex justify-between">
                        <div class="">
                            <p class="font-light">
                                Name
                            </p>
                            <p class="font-medium tracking-widest">
                            {item.Name}
                            </p>
                        </div>
                        <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                    </div>
                    <div class="pt-1">
                        <p class="font-light">
                            Card Number
                        </p>
                        <p class="font-medium tracking-more-wider">
                        {item.Number}
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">
                            <div class="">
                                <p class="font-light text-xs">
                                    Valid
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                    11/15
                                </p>
                            </div>
                            <div class="">
                                <p class="font-light  text-xs">
                                    Expiry
                                </p>
                                <p class="font-medium tracking-wider text-sm">
                                {item.Year} / {item.Mounth}
                                </p>
                            </div>
    
                            <div class="">
                                <p class="font-light text-xs">
                                    CVV
                                </p>
                                <p class="font-bold tracking-more-wider text-sm">
                                {item.Cvv2}
                                </p>
                            </div>

                            <div class="">
                                <p class="font-light text-xs">
                                    Password
                                </p>
                                <p class="font-bold tracking-more-wider text-sm">
                                {item. Password}
                                </p>
                            </div>

                            <div class="">
                                <p class="font-light text-xs">
                                Inventory
                                </p>
                                <p class="font-bold tracking-more-wider text-sm">
                                {item.Inventory}
                                </p>
                            </div>

                        </div>
                    </div>
    
                </div>
            </div>
   </div>
   </div>
            )
          })}
           
           </div>
  
    </div>
  )
}

export default EveryThing;

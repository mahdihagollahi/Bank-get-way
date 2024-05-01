// import React from 'react'
// import Bank from '../Commponent/Bank'

// export default function ImputCard() {
//   return (
//     <div>
//         <Bank/>
//     </div>
//   )
// }
import React, { useState } from 'react'
import TikCard from '../assets/Img/Card.png'
import Logo from '../Commponent/Logo';
import InputNumber from '../Commponent/InputNumber';
import Cvv2 from '../Commponent/Cvv2';
import Expier from '../Commponent/Expier';
import Name from '../Commponent/Name';
import Password from '../Commponent/Password';
import Inventory from '../Commponent/inventory';
import { IoCard } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

// import { v4 as uuidv4 } from 'uuid';
export default function Card({sendToAdsCard}) {
 

  const [InputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const InputValue = event.target.value;
    const formattedValue = InputValue.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
    setInputValue(formattedValue);
  };


// const [Card , SetCard] = useState([
//   {
//     id : uuidv4(),
//     CardNumber :"3343453433325678",
//     Cvv2 : "5083",
//     Expier : "09 . 08",
//     Name : 'Mahdi',
//     Password: '4534',
//     Inventory :'450000'
//   }
// ])
// const AddNewTodo = (event) =>{
     
//   if (event.key === "Enter" && event.target.value !== ''){
//     SetCard([
//           ...Card,
//           {
//               id: uuidv4(),
//               CardNumber : event.target.value,
//               Cvv2 : event.target.value,
//               Expier : event.target.value,
//               Name : event.target.value,
//               Password : event.target.value,
//               Inventory : event.target.value,
             
//           }
//       ])
//       event.target.value = "";
//   }
// }
const [Name , setName]=useState("");
const [Number , setNumber]=useState("");
const [Cvv2 , setCvv2] =useState("");
const [Year , setYear] =useState("");
const [Mounth , setMounth] =useState("");
const [Password , setPassword] =useState("");
const [Inventory , setInventory]= useState("");

  function send (){
     const object ={
      Name:Name,
      Number : Number,
      Cvv2:Cvv2,
      Year:Year,
      Mounth:Mounth,
      Password:Password,
      Inventory:Inventory

     }
     sendToAdsCard(object)
  }
  return (
   
    <div className='container'>
      <div className="container w-[69%] h-auto ml-60 text-center mr-96  align-center justify-center mt-20  text-white p-10 px-10 border-solid border-2 rounded-2xl bg-white ">
        <div className='flex px-10'>
           {/* <Logo  photo={TikCard} tittle="AceCoin" span='pay'/> */}
             <IoCard className='w-7 h-7 bg-blue-500 text-white rounded-full '  />
       <h2 className='text-2xl text-black'>Acoin
       <span className=' text-black opacity-70'>
          Pay
       </span>
       </h2>
            
          <div>

          </div>
        </div>
       
        {/* <InputNumber tittle='CardNumber' detail='Enter the 16-digit card number on the Card' /> */}



        <div className='flex gap-96 mt-10 text-black '>
          <div>
            <h2 className='text-bold text-lg mr-[143px]'>CardNumber</h2>
            <p className='text-xs opacity-50'>Enter the 16-digit card number on the Card</p>
          </div>
          <a className='flex  justify-between text-black ml-[30px]'>
           <FaRegEdit className='mt-1 text-blue-500' />
           <p>Edit</p>
           </a>
        </div>



        <div className='my-5 -ml-[60px]'>
          <input style={{color:"black"}}  value={Number} onChange={(e)=>setNumber(e.target.value)}
      maxLength='19' onKeyPress='return event.charCode >= 48 && event.charCode <= 57 || event.key === "Backspace"'  type="text"  className=" text-black bg-gray-100 text-center 
        border border-gray-100 
         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
         ml-[64px] block w-9/12 p-2.5  dark:border-gray-200
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500"  placeholder='2412   -    7512   -   3412   -   3456' required  />
        </div>
   


          {/* <Cvv2 tittle='CVV Number' detail='Enter the 3 or 4 digit number on the Card' /> */}

          <div className='flex mt-10 text-right text-black'>
          <div>
            <h2 className='text-bold text-lg mr-[128px]'>CVV Number</h2>
            <p className='text-xs opacity-50'>Enter the 3 or 4 digit number on the Card</p>
          </div>
          <div className='ml-20 mt-3'>
          <input style={{color:"black"}} value={Cvv2} onChange={(e)=>setCvv2(e.target.value)} placeholder='5643' maxLength='4' type="password" className=' text-center text-white bg-white px-[113px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
          </div>
          </div>


          

          {/* <Expier tittle='Expiry Date' detail='Enter the expiration date of the card'/> */}
        
        


          <div className='flex mt-10 text-right text-black'>
          <div className=''>
          <h2 className='text-bold text-lg mr-[111px]'>Expiry Date</h2>
          <p className='text-xs opacity-50dark:border-gray-200'>Enter the expiration date of the card</p>

          </div>
          
          <div className='flex gap-2 ml-[90px] text-black'>
          <input style={{color:"black"}} value={Year} onChange={(e)=>setYear(e.target.value)} placeholder='xx' maxLength='2' type="text" className=' text-center text-black bg-[#ffff] px-10 py-3   dark:focus:ring-blue-500 dark:focus:border-blue-500  border dark:border-gray-200  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
            <span className='mt-2 text-bold '>/</span>
            <input  style={{color:"black"}} value={Mounth} onChange={(e)=>setMounth(e.target.value)} placeholder='xx' maxLength='2' type="text" className=' text-center text-black bg-[#ffff] px-10 py-3   dark:focus:ring-blue-500 dark:focus:border-blue-500  border dark:border-gray-200  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
          </div>
          </div>



       
            {/* <Name tittle='Name' detail="Please enter u're name"/> */}


            <div className='flex mt-10 text-black'>
            <div>
              <h2 className='text-bold text-lg mr-[80px]'>Name</h2>
              <p className='text-xs opacity-50'>Please enter u're name</p>
            </div>
            <div className='flex gap-2 ml-[187px]'>
            <input style={{color:"black"}} placeholder='Mahdi'  value={Name} onChange={(e)=>setName(e.target.value)}  type="text" className=' text-center text-black bg-white px-[115px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
            </div>
        </div>


         
{/* <Password tittle='Password' detail="Please enter u're dynomic password" /> */}




<div className='flex mt-10 text-black'>




<div>
  
  <h2 className='text-bold text-lg mr-[120px]'>Password</h2>
  <p className='text-xs opacity-50'>Please enter u're dynomic password</p>
</div>
<div className='flex gap-2 ml-[113px]'>
<input style={{color:"black"}}  value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='xxxx' maxLength='4' type="password" className=' text-center text-black bg-white px-[115px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block'  />
</div>
</div>



{/* <Inventory tittle='inventory' detail="please enter u're inventory" /> */}


<div className='flex mt-10 text-black'>




<div>

<h2 className='text-bold text-lg mr-[120px]'>Inventory</h2>
<p className='text-xs opacity-50'>Please enter u're inventory</p>
</div>
<div className='flex gap-2 ml-[113px]'>
<input value={Inventory} onChange={(e)=>setInventory(e.target.value)} placeholder='xxxxxx' maxLength='4' type="text" className=' text-center text-black bg-white px-[115px] py-3  dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  border border-gray-300  text-sm rounded-lg  block'  />
</div>
</div>




        <div className='mt-10'>
        <button href="" type='sumbit'onClick={send} className='text-blue-700 w-9/12  hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-80 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>AddCard</button>
       </div>
      </div> 
       {/* <div className=' flex flex-col  gap-6'>
       <div className='flex  justify-between text-black'>
       <div className='flex  justify-between text-black'>
      
       </div>
       </div> */}
       {/* <input  value={Cvv2} onChange={(e)=>setCvv2(e.target.value)} type="text" />
      <input  value={Name} onChange={(e)=>setName(e.target.value)} type="text" />
      <input  value={Year} onChange={(e)=>setYear(e.target.value)} type="text" />
      <input  value={Mounth} onChange={(e)=>setMounth(e.target.value)} type="text" />
      <input  value={Password} onChange={(e)=>setPassword(e.target.value)} type="text" />
      <input  value={Inventory} onChange={(e)=>setInventory(e.target.value)} type="text" /> */}

       {/* </div> */}
     


      {/* <button onClick={send}>Add</button> */}

   
 
       
    </div>
  )
}

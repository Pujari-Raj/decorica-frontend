import {useState, useMemo} from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { authState } from '../features/authenticate/authSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { getHeaders } from '../../config'

function Profile() {
  const {user, userId} = useSelector(authState);
  const options = useMemo(() => countryList().getData(), [])
  const gender = ['Male', 'Female', 'Other'];
  const [address,setaddress] = useState({
    line1:"",
    line2:"",
    landmark:"",
    city:"",
    country:"",
    pincode:""
  });
  const [userData, setUserData] = useState({
    fullName: "",
    userName: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
  })

  const changeHandler = event => {
    const { name, value } = event.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }
  const changeHandler1 = event => {
    const { name, value } = event.target;
    setaddress(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  const splitAddress = () =>{
    const [line1, line2, landmark, city, country, pincode]  =  userData && userData.address.split(',').map(part => part.trim());
    setaddress([line1, line2, landmark, city, country, pincode]);
  }
  const updateUserDetails = async() =>{
    const updatedAddress= Object.values(address).join(', ');
    setUserData(prevData => ({
      ...prevData,
      address: updatedAddress,
    }));
    console.log(userData)
    // await axios.post(`http://localhost:8082/secured/user/update?id=${userId}`, userData, getHeaders())
    // .then((response)=>{
    //   console.log(response.data)
    // })
    // .catch((error) =>{
    //   console.error("Error:", error);
    // })
  }
    
  const getUserDetails = async() =>{
    await axios.get(`http://localhost:8082/secured/user/get/by-id?id=${userId}`,getHeaders())
    .then(async(response) => {
      const {fullName, userName, email, gender, phone, address} = response.data;
      setUserData({fullName, userName, email, gender, phone, address});
      await splitAddress();
    })
      .catch((error) => {
        console.error("Error:", error);
      })
  }

  useEffect(()=>{
    getUserDetails()
  },[])


  return (
    <>
    <div className="banner text-gray-300 px-10 bg-[#34495E] select-none h-36 py-14 mt-10 mx-10 rounded-2xl shadow-xl">
      <h1 className='text-4xl'>Hello {user && user.replace(/"/g, "")},  Welcome Back</h1>
    </div>
    <div className="personal-info flex px-10 bg-white text-lg mx-10 rounded-2xl shadow-2xl py-10 mt-10">
      <div>
      <h1 className='text-4xl font-bold p-10'>Personal Information</h1>
        <form action="" className='grid px-10'>
          <label htmlFor="text" className='py-4 font-semibold'>Full Name</label>
          <input type="text" className='py-4 w-[500px] focus:outline-none border-b-2' placeholder='Your Full Name' name="fullName" value={userData.fullName} onChange={changeHandler}/>
          <label htmlFor="text" className='py-4 font-semibold'>User Name</label>
          <input type="text" className='py-4 w-[500px] focus:outline-none border-b-2' placeholder='Your User Name' name="userName" value={userData.userName} onChange={changeHandler}/>
          <label htmlFor="email" className='py-4 font-semibold'>Registered Email</label>
          <input type="email" className='py-4 w-[500px] focus:outline-none border-b-2' placeholder='Your Email' name="email" value={userData.email} onChange={changeHandler}/>
          <label htmlFor="number" className='py-4 font-semibold'>Registered Phone</label>
          <input type="text" className='py-4 w-[500px] focus:outline-none border-b-2' placeholder='Your Phone no.' name="phone" value={userData.phone} onChange={changeHandler}/>
          <label htmlFor="text" className='py-4 font-semibold'>Gender</label>
          <Select className='w-[230px]' options={gender} name="gender" value={userData.gender} onChange={changeHandler}/>
          <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2  font-semibold'>Address Line 1</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Ex: Flat 101...' name="line1" value={address.line1} onChange={changeHandler1} required/> 
                    </div>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2  font-semibold'>Address Line 2</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Ex: James Street...' name="line2" value={address.line2} onChange={changeHandler1} required/> 
                    </div>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2  font-semibold'>Landmark</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Ex: Near Old Rail Road...' name="landmark" value={address.landmark} onChange={changeHandler1} required/> 
                    </div>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2  font-semibold'>City</label>
                        <input type="text" className='border-2 w-[500px] h-10 p-2 focus:outline-none' placeholder='Your City' name="city" value={address.city} onChange={changeHandler1} required/> 
                    </div>
                    <div className='flex'>
                    <div className="grid mt-5">
                        <label htmlFor="text" className='mb-2  font-semibold'>Country</label>
                        <Select className='w-[230px]' options={options} name="country" value={address.country} onChange={changeHandler1}/>
                    </div>
                    <div className="grid mt-5 ml-10">
                        <label htmlFor="text" className='mb-2  font-semibold'>PIN Code</label>
                        <input type="textr" className='border-2 w-[230px] h-10 p-2 focus:outline-none' maxLength="6" placeholder='PIN Code' name="pincode" value={address.pincode} onChange={changeHandler1} required/>
                    </div>
                    </div>
          <button className='mt-10 py-2 px-5 bg-purple-500 text-white font-semibold border-2 border-purple-500 hover:bg-white hover:text-purple-500' onClick={updateUserDetails}>Save</button>
        </form>
        </div>
        <div>
          <img className='mt-32 w-[90%] select-none rounded-2xl shadow-2xl' src="https://cdn.dribbble.com/users/108637/screenshots/2971812/comp_1.gif" alt="gif" />
        </div>
    </div>
    <div className="orders px-10 bg-white text-lg mx-10 rounded-2xl shadow-2xl py-10 my-10">
    <h1 className='text-4xl font-bold p-10'>Your Recent Orders</h1>
    <div className='flex justify-around items-center border-2 mx-20 my-2 rounded-2xl shadow-lg my-5 cursor-pointer'>
      <h1>Order ID #12345</h1>
      <p className='text-green-500 font-semibold '>Delivered</p>
      <div>
        <img className='h-20 w-16 my-4' src="../assets/productimages/study-lamp.jpg" alt="product" />
      </div>
    </div>
    <div className='flex justify-around items-center border-2 rounded-2xl shadow-lg mx-20 my-5 cursor-pointer'>
      <h1>Order ID #13968</h1>
      <p className='text-blue-500 font-semibold'>In Transit</p>
      <div>
        <img className='h-20 w-16 my-4' src="../assets/productimages/vase-1.jpg" alt="product" />
      </div>
    </div>
    <div className='flex justify-around items-center border-2 rounded-2xl shadow-lg mx-20 my-5 cursor-pointer'>
      <h1>Order ID #84543</h1>
      <p className='text-red-500 font-semibold'>Cancelled</p>
      <div>
        <img className='h-20 w-16 my-4' src="../assets/productimages/wall-mirror.jpg" alt="product" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Profile
import React from 'react';
import { Link } from "react-router-dom";
import { CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    PublishOutlined, 
} from "@mui/icons-material";

const ViewUser = () => {
  return (
    <>
    <div className="flex-[4] p-5">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Edit User</h1>
        <Link to='/newUser'>
          <button className="w-20 bg-[rgb(10,149,149)] cursor-pointer text-[white] text-base p-[5px] rounded-[5px] border-[none]">Create</button>
        </Link>
      </div>
      <div className="flex mt-5">
        <div className="flex-1 shadow-[0px_0px_15px_-6px_rgba(0,0,0,0.75)] p-5">
          <div className="flex items-center">
            <img src="https://shorturl.at/prEHQ" alt=""
              srcset="" className="w-10 h-10 object-cover rounded-[50%]" />

            <div className="flex flex-col ml-5">
              <span className="font-semibold">Jeenifer Luis</span>
              <span className="font-light">FrontEnd Developer</span>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-sm font-semibold text-[rgb(175,170,170)]">Account Details</span>
            <div className="flex items-center text-[#444] mx-0 my-5">
              <PermIdentity className="text-base" />
              <span className="ml-2.5">JeeniferLuis189</span>
            </div>
            <div className=" flex items-center text-[#444] mx-0 my-5">
              <CalendarToday className="text-base" />
              <span className="ml-2.5">10/12/1999</span>
            </div>
            <span className="text-sm font-semibold text-[rgb(175,170,170)]">Contact Details</span>
            <div className=" flex items-center text-[#444] mx-0 my-5">
              <PhoneAndroid className="text-base" />
              <span className="ml-2.5">+91 12345667</span>
            </div>
            <div className=" flex items-center text-[#444] mx-0 my-5">
              <MailOutline className="text-base" />
              <span className="ml-2.5">JeeniferLuis99@gmail.com</span>
            </div>
            <div className=" flex items-center text-[#444] mx-0 my-5">
              <LocationSearching className="text-base" />
              <span className="ml-2.5">New York | USA</span>
            </div>
          </div>
        </div>

        <div className="flex-[2] shadow-[0px_0px_15px_-6px_rgba(0,0,0,0.75)] ml-5 p-5">
            <span className="update-user-title">Edit</span>
            <form action="" className="flex justify-between mt-5">
                <div className="update-user-form-left">
                    <div className="flex flex-col mt-2.5">
                        <label className='text-base mb-[5px]' htmlFor="">Username: </label>
                        <input type="text" disabled placeholder="JeeniferLuis189"
                        className="h-[30px] w-[250px] border-b-[gray] border-[none] border-b border-solid focus:border-b-[3px] focus:border-b-[gray] focus:border-solid focus:outline-none" />
                    </div>
                    <div className="flex flex-col mt-2.5">
                        <label className='text-base mb-[5px]' htmlFor="">Name: </label>
                        <input type="text" disabled placeholder="Jeenifer Luis"
                        className="h-[30px] w-[250px] border-b-[gray] border-[none] border-b border-solid focus:border-b-[3px] focus:border-b-[gray] focus:border-solid focus:outline-none" />
                    </div>
                    <div className="flex flex-col mt-2.5">
                        <label className='text-base mb-[5px]' htmlFor="">Email: </label>
                        <input type="text" disabled placeholder="JeeniferLuis99@gmail.com"
                        className="h-[30px] w-[250px] border-b-[gray] border-[none] border-b border-solid focus:border-b-[3px] focus:border-b-[gray] focus:border-solid focus:outline-none" />
                    </div>
                    <div className="flex flex-col mt-2.5">
                        <label className='text-base mb-[5px]' htmlFor="">Phone: </label>
                        <input type="text" disabled placeholder="+91 12345667"
                        className="h-[30px] w-[250px] border-b-[gray] border-[none] border-b border-solid focus:border-b-[3px] focus:border-b-[gray] focus:border-solid focus:outline-none" />
                    </div>
                    <div className="flex flex-col mt-2.5">
                        <label className='text-base mb-[5px]' htmlFor="">Address: </label>
                        <input type="text" disabled placeholder="New York | USA"
                        className="h-[30px] w-[250px] border-b-[gray] border-[none] border-b border-solid focus:border-b-[3px] focus:border-b-[gray] focus:border-solid focus:outline-none" />
                    </div>
                </div>
                <div className="flex flex-col justify-between mr-5">
                    <div className="flex items-center w-[100px] h-[100px] object-cover mr-5 rounded-[10px]">
                        <img src="https://shorturl.at/prEHQ" alt=""
                        srcset="" className="flex items-center w-[100px] h-[100px] object-cover mr-5 rounded-[10px]" /> 
                        <label htmlFor="file">
                            <PublishOutlined className="cursor-pointer"/>
                        </label>
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="cursor-pointer bg-[darkblue] text-[white] font-semibold p-[5px] rounded-[5px] border-[none]">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ViewUser
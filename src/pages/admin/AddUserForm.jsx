import React from 'react';

const AddUserForm = () => {
    return (
        <>
            <div className="flex-[4]">
                <h1 className="text-center my-8 text-2xl font-bold">Add New User</h1>
                    <form className="flex flex-wrap mx-16 justify-center" >
                        <div className="w-[400px] flex flex-col mr-5 mt-2.5">
                            <label className='text-sm font-semibold text-[rgb(151,150,150)] mb-2.5'>Username</label>
                            <input className='outline-none h-5 border mt-[5px] p-4 rounded-[5px] border-solid border-[gray] focus:border-2 focus:border-solid focus:border-[gray]'
                                type="text" placeholder="john" />
                        </div>
                        <div className="w-[400px] flex flex-col mr-5 mt-2.5">
                            <label className='text-sm font-semibold text-[rgb(151,150,150)] mb-2.5'>Full Name</label>
                            <input className='outline-none h-5 border mt-[5px] p-4 rounded-[5px] border-solid border-[gray] focus:border-2 focus:border-solid focus:border-[gray]' type="text" placeholder="John Smith" />
                        </div>
                        <div className="w-[400px] flex flex-col mr-5 mt-2.5">
                            <label className='text-sm font-semibold text-[rgb(151,150,150)] mb-2.5'>Email</label>
                            <input className='outline-none h-5 border mt-[5px] p-4 rounded-[5px] border-solid border-[gray] focus:border-2 focus:border-solid focus:border-[gray]' type="email" placeholder="john@gmail.com" />
                        </div>
                        <div className="w-[400px] flex flex-col mr-5 mt-2.5">
                            <label className='text-sm font-semibold text-[rgb(151,150,150)] mb-2.5'>Password</label>
                            <input className='outline-none h-5 border mt-[5px] p-4 rounded-[5px] border-solid border-[gray] focus:border-2 focus:border-solid focus:border-[gray]' type="password" placeholder="password" />
                        </div>
                        <div className="w-[400px] flex flex-col mr-5 mt-2.5">
                            <label className='text-sm font-semibold text-[rgb(151,150,150)] mb-2.5'>Phone</label>
                            <input className='outline-none h-5 border mt-[5px] p-4 rounded-[5px] border-solid border-[gray] focus:border-2 focus:border-solid focus:border-[gray]' type="text" placeholder="+1 123 456 78" />
                        </div>
                        <div className="w-[400px] flex flex-col mr-5 mt-2.5">
                            <label className='text-sm font-semibold text-[rgb(151,150,150)] mb-2.5'>Address</label>
                            <input className='outline-none h-5 border mt-[5px] p-4 rounded-[5px] border-solid border-[gray] focus:border-2 focus:border-solid focus:border-[gray]' type="text" placeholder="New York | USA" />
                        </div>
                        <div className="w-[400px] flex flex-col mr-5 mt-2.5">
                            <label className='text-sm font-semibold text-[rgb(151,150,150)] mb-2.5'>Gender</label>
                            <div className="newUserGender">
                                <input type="radio" name="gender" id="male" value="male" />
                                <label className='text-lg text-[#555] m-2.5' for="male">Male</label>
                                <input type="radio" name="gender" id="female" value="female" />
                                <label className='text-lg text-[#555] m-2.5' for="female">Female</label>
                                <input type="radio" name="gender" id="other" value="other" />
                                <label className='text-lg text-[#555] m-2.5' for="other">Other</label>
                            </div>
                        </div>
                        <div className="w-[400px] flex flex-col mr-5 mt-2.5">
                            <label className='text-sm font-semibold text-[rgb(151,150,150)] mb-2.5'>Active</label>
                            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-2 focus:border-solid focus:border-[gray] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            name="active" id="active">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="w-full text-center">
                        <button className="w-[150px] h-[50px] bg-[#e77f7f] hover:bg-[#d33838] text-[white] font-semibold cursor-pointer mt-[30px] px-2.5 py-[7px] rounded-[10px] border-[none]">Create</button>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default AddUserForm
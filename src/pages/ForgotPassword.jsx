import cardImg from './images/card3.jpg'


export default function ForgotPassword() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 m-20 h-3/6 scale-x-75 scale-y-90'>
      <div className='sm:block'>
        <img className='w-full h-full object-cover' src={cardImg} alt=''/>
      </div>
      <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[480px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>Reset Password</h2>
          <div className='flex flex-col text-gray-300 py-2 '>
            <label>Email Id*</label>
            <input className='rounded-lg text-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" />
          </div>
          
          <button className='w-full my-5 py-2 bg-teal-500'>Send Reset Link</button>
          
          <p className='text-gray-300 text-lg'>Login to your Account. <a className='text-teal-500' href='/login'>Sign In</a></p>
          <p className='text-gray-300 text-lg'>Don't Have an Account? <a className='text-teal-500' href='/register'>Register Now!!!</a></p>
        </form>
      </div>
    </div>
  )
}


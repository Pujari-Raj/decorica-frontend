/* eslint-disable react/prop-types */

import Sidebar from './Sidebar'


function Layout2({children}) {
 
  return (
    <div className="flex text-black h-full">
      <Sidebar/>
      <div className="grow p-10">
        {/* Main content area */}
        {children}
      </div>
      
    </div>
  )
}

export default Layout2
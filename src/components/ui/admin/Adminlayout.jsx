/* eslint-disable react/prop-types */

import './AdminSidebar';
import AdminSidebar from './AdminSidebar';


const Adminlayout = ({children}) => {

  return (
    <div>
      <div className="">
        <div  className="">
        <AdminSidebar/>
        </div>
        <div className="">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Adminlayout
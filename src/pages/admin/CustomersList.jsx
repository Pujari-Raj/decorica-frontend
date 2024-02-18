import { Link } from "react-router-dom";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { alpha, styled } from '@mui/material/styles';
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { getHeaders } from "../../../config";

const columns = [
    { field: 'userId', headerName: 'ID', width: 70 },
    { field: 'fullName', headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false, width: 180 },
    { field: 'userName', headerName: 'User name', width: 130 },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 110,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 180,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 250,
    },

    // user actions
    {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    <Link to={"/admin-dashboard/viewuser/" + params.row.id}>
                        <button className=" bg-[#3bb077] text-[white] cursor-pointer mr-5 px-2.5 py-[5px] rounded-[10px] border-[none]">
                        View</button>
                    </Link>
                    {/* delete btn */}
                    {/* <Link to=""> */}
                        <button className="flex" onClick={() =>  handleClick("success")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e23232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </button>
                    {/* </Link> */}
                </>
            );
        },
    },
];

// grid
const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.odd`]: {
        backgroundColor: theme.palette.grey[300],
        '&:hover, &.Mui-hovered': {
            backgroundColor: '#fff',
            '@media (hover: none)': {
                // backgroundColor: 'transparent',
            },
        },
        '&.Mui-selected': {
            '&:hover, &.Mui-hovered': {
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    },
}));

// functn for different types of toasts
const handleClick = (toastType) => {
    switch (toastType) {
        case 'success':
            console.log('success called');
            toast.success('Customer Deleted Successfully');
            break;
        case 'error':
            console.log('error called');
            toast.error('Operation Unsuccessfull');
            break;
        case 'warning':
            console.log('warning called');
            toast.warn('Warning Something Is going wrong');
            break;
    }
}
const CustomersList = () => {
    const [customerData, setCustomerData] = useState();
  
    async function getDetails(){
        await axios.get("http://localhost:8082/secured/user/getUsersByRoleId?roleId=3", getHeaders())
        .then((response) => {
            setCustomerData(response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        }
   
    useEffect(() => {
        getDetails();
    },[])

    const getRowId = (row) => row.userId;
    return (
        <Box>
            <ToastContainer
                    position='bottom-right'
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme='colored'
                />
            <div className="mx-20 my-4">
                <p className='font-bold text-xl mb-4'>Customers List</p>
                <div style={{ width: "100%", }}>
                    <StripedDataGrid
                        // loading={loading}
                        rows={customerData && customerData.length>0 ? customerData : {}}
                        columns={columns}
                        getRowId={getRowId}
                        disableSelectionOnClick
                        pageSize={10}
                        style={{ fontFamily: "Montserrat" }}
                        checkboxSelection
                        autoHeight={true}
                        getRowClassName={(params) =>
                            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                        }
                    // initialState={{
                    //     pagination: {
                    //         paginationModel: { page: 0, pageSize: 5 },
                    //     },
                    // }}
                    // pageSizeOptions={[5]}

                    />
                </div>
            </div>
        </Box>
    )
}

export default CustomersList
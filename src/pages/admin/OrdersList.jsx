import React from 'react';
import { Link } from "react-router-dom";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { alpha, styled } from '@mui/material/styles';
import { toast, ToastContainer } from "react-toastify";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
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
                    <button className="flex" onClick={() => handleClick("success")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e23232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                    {/* </Link> */}
                </>
            );
        },
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Demo', firstName: 'Jon', age: 32 },
    { id: 11, lastName: 'NYork', firstName: 'Cersel', age: 40 },
    { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 50 },
    { id: 13, lastName: 'Stark', firstName: 'Arya', age: 36 },
    { id: 14, lastName: 'Targaryen', firstName: 'Denerys', age: null },
    { id: 15, lastName: 'Melisandre', firstName: null, age: 50 },
    { id: 16, lastName: 'Clifford', firstName: 'Ferrare', age: 44 },
    { id: 17, lastName: 'Frances', firstName: 'Roshni', age: 36 },
    { id: 18, lastName: 'Roxie', firstName: 'Harvi', age: 58 },
    { id: 19, lastName: 'India', firstName: 'Roshni', age: 36 },
    { id: 20, lastName: 'India', firstName: 'Harvi', age: 28 },

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
            toast.success('Order Deleted Successfully');
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

const OrdersList = () => {
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
                <p className='font-bold text-xl mb-4'>Orders List</p>
                <div style={{ width: "100%", }}>
                    <StripedDataGrid
                        // loading={loading}
                        rows={rows}
                        columns={columns}
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

export default OrdersList
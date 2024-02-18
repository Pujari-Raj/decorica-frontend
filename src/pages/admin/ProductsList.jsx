import { Link } from "react-router-dom";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { getHeaders } from "../../../config";

const columns = [
  { field: "productCode", headerName: "Code", width: 90 },
  {
    field: "productName",
    headerName: "Name",
    width: 150,
    sortable: false,
    valueGetter: (params) => `${params.row.productName || ""}`,
  },
  { field: "prodDesc", headerName: "Description", width: 200 },
  { field: "price", headerName: "Price", width: 100 },
  { field: "qunatity", headerName: "Quantity", width: 100 },
  { field: "size", headerName: "Size", width: 100 },
  { field: "brandId", headerName: "Brand Id", width: 100 },
  { field: "categoryId", headerName: "Category Id", width: 160 },
  // user actions
  {
    field: "action",
    headerName: "Action",
    width: 120,
    renderCell: (params) => {
      return (
        <>
          <Link to={ "/seller-dashboard/product-view" + params.row.productId }>
            <button className=" bg-[#3bb077] text-[white] cursor-pointer mr-5 px-2.5 py-[5px] rounded-[10px] border-[none]">
              View
            </button>
          </Link>
          {/* delete btn */}
          {/* <Link to=""> */}
          <button className="flex" onClick={() => handleClick("success")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e23232"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
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
    "&:hover, &.Mui-hovered": {
      backgroundColor: "#fff",
      "@media (hover: none)": {
        // backgroundColor: 'transparent',
      },
    },
    "&.Mui-selected": {
      "&:hover, &.Mui-hovered": {
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

// functn for different types of toasts
const handleClick = (toastType) => {
  switch (toastType) {
    case "success":
      console.log("success called");
      toast.success("Product Deleted Successfully");
      break;
    case "error":
      console.log("error called");
      toast.error("Operation Unsuccessfull");
      break;
    case "warning":
      console.log("warning called");
      toast.warn("Warning Something Is going wrong");
      break;
  }
};

const ProductsList = () => {
    const [prodDetails, setProdDetails] = useState();

    async function getProd(){
        await axios.get("http://localhost:8082/product/getAllProduct", getHeaders())
        .then((response) => {
          console.log(response.data)
            setProdDetails(response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        }
   
    useEffect(() => {
        getProd();
    },[])

    const getRowId = (row) => row.productId;
    return (
    <div className="mx-20">
    <Box>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
      <div className=" my-4">
        <p className="font-bold text-xl mb-4">Products List</p>
        <div style={{ width: "100%" }}>
          <StripedDataGrid
            // loading={loading}
            rows={prodDetails && prodDetails.length>0 ? prodDetails : {}}
            columns={columns}
            getRowId={getRowId}
            disableSelectionOnClick
            pageSize={10}
            style={{ fontFamily: "Montserrat", }}
            checkboxSelection
            autoHeight={true}
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
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
    </div>
  );
};

export default ProductsList;

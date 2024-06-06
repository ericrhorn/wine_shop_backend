import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Products from "./Products";

const Store = (props) => {
    const [productList, setProductList] = useState({});

  return (
    <>
      <div>
        <div className="flex h-screen flex-col rounded md:flex-row md:overflow-hidden overflow-hidden border-2 m-4">
          <div className="w-full flex-none md:w-64">
            <div className="flex h-full flex-col px-3 py-2 md:px-2">
              {/* <div className="w-full md:h-32 p-2 rounded  bg-blue-600 flex flex-col justify-end">
                <h2 style={{ color: "white" }}>Wine Shop</h2>
              </div> */}

              <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 pt-2">
                <div className=" flex flex-row flex-wrap h-auto p-2 w-full grow rounded-md bg-gray-100 md:block md:space-y-2 justify-center items-center">
                  {/* <h1>hi</h1> */}
                  <Button
                    style={{ width: "200px", margin: "5px" }}
                    variant="outlined"
                    // onClick={showProducts}
                  >
                    Products
                  </Button>
                  <Button
                    style={{ width: "200px", margin: "5px" }}
                    variant="outlined"
                    // onClick={showUsers}
                  >
                    Wine Club Members
                  </Button>
                  <Button
                    style={{ width: "200px", margin: "5px" }}
                    variant="outlined"
                  >
                    Wine Club Members
                  </Button>
                  <Button
                    style={{ width: "200px", margin: "5px" }}
                    variant="outlined"
                  >
                    Wine Club Members
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-y-auto p-7 md:overflow-y-auto md:p-7 bg-white  w-full">
            <Products/>
            {/* {show === "users" ? <UserList /> : null}
            {show === "products" ? <NewProducts /> : null} */}
            {/* <UserList /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;

import React from "react";

const DashboardInfo = () => {
  return (
    <>
      {/* <div className="flex flex-wrap justify-around w-full flex-col sm:flex-row md:overflow-hidden overflow-hidden border-2 p-1 m-1"> */}
      <div className="flex flex-wrap items-stretch w-full">
        {/* <div className="w-[200px] m-5"> */}
        {/* <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 w-full"> */}
        <div className="flex  flex-col w-full md:flex-row md:overflow-hidden overflow-hidden">
          <div className="flex flex-wrap flex-col w-full md:flex-row md:overflow-hidden overflow-hidden">
            <div className="min-w-[200px] flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
              <div className="flex">
                <div className="px-4 pt-3">
                  <h5>Wine Club</h5>
                </div>
              </div>
              <div className="flex justify-center align-center rounded-xl bg-white p-2 m-2">
                <div>
                  <p>Silver</p>
                </div>
              </div>
              {/* <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
                <div>
                  <p>Gold</p>
                </div>
              </div>
              <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
                <div>
                  <p>Platinum</p>
                </div>
              </div> */}
            </div>

            <div className="min-w-[200px] flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
              <div className="flex">
                <div className="px-4 pt-3">
                  <h5>Revenue</h5>
                </div>
              </div>
              <div className="flex justify-center align-center rounded-xl bg-white p-2 m-2">
                <div>
                  <p>Silver</p>
                </div>
              </div>
              {/* <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
                <div>
                  <p>Gold</p>
                </div>
              </div> */}
              {/* <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
                <div>
                  <p>Platinum</p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="flex flex-wrap flex-col w-full md:flex-row md:overflow-hidden overflow-hidden">
            <div className="min-w-[200px] flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
              <div className="flex">
                <div className="px-4 pt-3">
                  <h5>Wine</h5>
                </div>
                {/* <div className="h-5 w-5 rounded-md bg-gray-200" />
                      <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" /> */}
              </div>
              <div className="flex justify-center align-center rounded-xl bg-white p-2 m-2">
                {/* <div className="h-7 w-20 rounded-md bg-gray-200" /> */}
                <div>
                  <p>Red</p>
                </div>
              </div>
              {/* <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
                <div>
                  <p>White</p>
                </div>
              </div> */}
            </div>

            <div className="min-w-[200px] flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
              <div className="flex">
                <div className="px-4 pt-3">
                  <h5>Wine</h5>
                </div>
              </div>
              <div className="flex justify-center align-center rounded-xl bg-white p-2 m-2">
                <div>
                  <p>Red</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col md:flex-col lg:flex-row md:overflow-hidden overflow-hidden">
          <div className=" flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
            <div className="flex">
              <div className="px-4 pt-3">
                <h5>Monthly Revenue</h5>
              </div>
            </div>
            <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
              {/* <div>
              <p>Red</p>
            </div> */}
            </div>
          </div>

          <div className="flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
            <div className="flex">
              <div className="px-4 pt-3">
                <h5>Recent Orders</h5>
              </div>
            </div>
            <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
              {/* <div>
              <p>Red</p>
            </div> */}
            </div>
          </div>
        </div>

        {/* <div className="border-2 flex-grow flex justify-center items-center h-[500px]">
                    <h1>hello</h1>
                  </div>
                  <div className="border-2 flex-grow flex justify-center items-center h-[500px]">
                    <h1>hello</h1>
                  </div>
                  <div className="border-2 flex-grow flex justify-center items-center h-[500px]">
                    <h1>hello</h1>
                  </div>
                  <div className="border-2 flex-grow flex justify-center items-center h-[500px]">
                    <h1>hello</h1>
                  </div>
                  <div className="border-2 flex-grow flex justify-center items-center h-[500px]">
                    <h1>hello</h1>
                  </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default DashboardInfo;

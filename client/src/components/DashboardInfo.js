import React from 'react'

const DashboardInfo = () => {
  return (
    <>
      {/* <div className="flex flex-wrap justify-around w-full flex-col sm:flex-row md:overflow-hidden overflow-hidden border-2 p-1 m-1"> */}
      <div className="flex flex-wrap items-stretch w-full">
        {/* <div className="w-[200px] m-5"> */}
        {/* <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 w-full"> */}
        {/* <div
                    className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}
                  >
                    <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
                    <div className="rounded-xl bg-gray-100 p-4">
                      <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4" />
                      <div className="flex items-center pb-2 pt-6">
                        <div className="h-5 w-5 rounded-full bg-gray-200" />
                        <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
                    <div className="flex items-center">
                      <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
                      <div className="min-w-0">
                        <div className="h-5 w-40 rounded-md bg-gray-200" />
                        <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
                      </div>
                    </div>
                    <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
                  </div> */}

        <div className="w-[300px] grow-1 min-h-[200px] border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
          <div className="flex">
            <div className="px-4 pt-3">
              <h4>Wine Club Members</h4>
            </div>
            {/* <div className="h-5 w-5 rounded-md bg-gray-200" />
                      <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" /> */}
          </div>
          <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
            {/* <div className="h-7 w-20 rounded-md bg-gray-200" /> */}
            <div>
              <p>Silver</p>
            </div>
          </div>
          <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
            {/* <div className="h-7 w-20 rounded-md bg-gray-200" /> */}
            <div>
              <p>Gold</p>
            </div>
          </div>
          <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
            {/* <div className="h-7 w-20 rounded-md bg-gray-200" /> */}
            <div>
              <p>Platinum</p>
            </div>
          </div>
        </div>

        <div className="w-[300px] grow-1 min-h-[200px] border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
          <div className="flex">
            <div className="px-4 pt-3">
              <h4>Revenue From Wine Club</h4>
            </div>
            {/* <div className="h-5 w-5 rounded-md bg-gray-200" />
                      <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" /> */}
          </div>
          <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
            {/* <div className="h-7 w-20 rounded-md bg-gray-200" /> */}
            <div>
              <p>Silver</p>
            </div>
          </div>
          <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
            {/* <div className="h-7 w-20 rounded-md bg-gray-200" /> */}
            <div>
              <p>Gold</p>
            </div>
          </div>
          <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
            {/* <div className="h-7 w-20 rounded-md bg-gray-200" /> */}
            <div>
              <p>Platinum</p>
            </div>
          </div>
        </div>

        <div className="w-[300px] grow-1 min-h-[200px] border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
          <div className="flex">
            <div className="px-4 pt-3">
              <h4>Wine</h4>
            </div>
            {/* <div className="h-5 w-5 rounded-md bg-gray-200" />
                      <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" /> */}
          </div>
          <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
            {/* <div className="h-7 w-20 rounded-md bg-gray-200" /> */}
            <div>
              <p>Red</p>
            </div>
          </div>
          <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
            {/* <div className="h-7 w-20 rounded-md bg-gray-200" /> */}
            <div>
              <p>White</p>
            </div>
          </div>
        </div>

        <div className="w-[300px] grow-0 min-h-[200px] border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
          <div className="flex">
            <div className="px-4 pt-3">
              <h4>Wine</h4>
            </div>
          </div>
          <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
            <div>
              <p>Red</p>
            </div>
          </div>
        </div>

        <div className=" flex-auto grow-1 min-h-[400px] border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
          <div className="flex">
            <div className="px-4 pt-3">
              <h4>Chart</h4>
            </div>
          </div>
          <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2">
            {/* <div>
              <p>Red</p>
            </div> */}
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
}

export default DashboardInfo
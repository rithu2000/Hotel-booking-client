import React, { useEffect, useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table'
import { COLUMNS } from './col'
import './Table.css'
import { getUsers } from '../../../helper/adminApi'
import Navbar from '../../../components/admin/navbar/Navbar'


export const PaginationTable = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {

    const apiCall = async () => {
      const userData = await getUsers()
      setUsers(userData)
    }
    apiCall()

  }, [])
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => users)



  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 }
    },
    usePagination
  )

  const { pageIndex, pageSize } = state


  return (
    <>
      <Navbar />
      <table {...getTableProps()}>
        <thead>
          {headerGroups?.map(headerGroup => (
            <tr {...headerGroup?.getHeaderGroupProps()}>
              {headerGroup?.headers?.map(column => (
                <th {...column?.getHeaderProps()}>{column?.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page?.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row?.cells.map(cell => {
                  return <td {...cell?.getCellProps()}>{cell?.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className='flex justify-center'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}






































// import axios from "axios";
// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { BlockUser, getUser } from "../../../helper/adminApi";
// import { hideLoading, showLoading } from "../../../redux/AlertSlice";
// import ListUsers from "../../../components/admin/listUsers/ListUsers";
// import $ from "jquery";


// export default function UserManage() {


//   const [users, setUsers] = useState([])
//   const dispatch = useDispatch


//   const getUsers = async () => {
//     try {

//       //  dispatch(showLoading())

//       const { data } = await getUser()
//       setUsers(data)
//       console.log(data, "jjjjjjjjjjjjjjjjj")
//     } catch (error) {

//     }
//   }
//   // const blockAction=async(userId)=>{
//   //  await BlockUser(false,userId)
//   // //  dispatch(hideLoading())
//   // }
//   // const unblockAction=async(userId)=>{

//   //   await BlockUser(true,userId)

//   // }


//   // useEffect(()=>{
//   // getUsers()
//   // },[])

//   useEffect(() => {
//     getUsers()
//     $(document).ready(function () {
//       $("#dataTable").DataTable();
//     });
//   }, []);

//   return (
//     <>
//       <div className="">
//         <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 ">
//           <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
//             <h1 className="text-white text-center font-semibold text-xl">User Management</h1>
//             <table className="w-full mt-5">
//               <thead className="bg-gray-50 border-b-2 border-stone-700 ">
//                 <tr>
//                   <th className="p-3 text-sm font-semibold tracking-wide text-left">
//                     {" "}
//                     No
//                   </th>
//                   <th className="p-3 text-sm font-semibold tracking-wide text-left">
//                     Name
//                   </th>
//                   <th className="p-3 text-sm font-semibold tracking-wide text-left">
//                     Email
//                   </th>
//                   <th className="p-3 text-sm font-semibold tracking-wide text-left">
//                     Status
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* {users?.map((Item, index) => {
//                   return (
//                     <ListUsers Item={Item} index={index} />
//                   )
//                 })} */}

//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>



//       <div class="container mx-auto">
//         {/* <div class="flex flex-col">
//           <div class="w-full">
//             <div class="p-8 border-b border-gray-200 shadow">
//               <table class="divide-y divide-gray-300" id="dataTable">
//                 <thead class="bg-black">

//                   <tr>
//                     <th class="px-6 py-2 text-xs text-white">
//                       ID
//                     </th>
//                     <th class="px-6 py-2 text-xs text-white">
//                       Name
//                     </th>
//                     <th class="px-6 py-2 text-xs text-white">
//                       Email
//                     </th>

//                     <th class="px-6 py-2 text-xs text-white">
//                       Status
//                     </th>

//                   </tr>
//                 </thead>
//                 <tbody class="bg-white divide-y divide-gray-300">
//                   {users?.map((Item, index) => {
//                     return (
//                       <ListUsers Item={Item} index={index} />
//                     )
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div> */}
//       </div>

//       {/* <Helmet>
//         <script>
//           $(document).ready(function () {
//             $('#dataTable').DataTable()

//           });
//         </script>
//       </Helmet> */}

//     </>
//   );
// }

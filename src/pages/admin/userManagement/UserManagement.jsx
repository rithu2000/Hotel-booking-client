import { useEffect, useState } from "react";
import { getUsers } from "../../../Api/AdminApi";
import ListUsers from "../../../components/admin/listUsers/ListUsers";

export default function UserManage() {

  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li key={number}>
        <button onClick={() => setCurrentPage(number)}>
          {number}
        </button>
      </li>
    );
  });

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };



  useEffect(() => {
    const apiCall = async () => {
      const userData = await getUsers()
      setUsers(userData)
    }
    apiCall()
  }, [])

  return (

    <>
      <div className="">
        <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 ">
          <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-white text-center font-semibold text-xl">User Management</h1>
            <table className="w-full mt-5">
              <thead className="bg-gray-50 border-b-2 border-stone-700 ">
                <tr>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    {" "}
                    No
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    First Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Last Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Email
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((Item, index) => {
                  return (
                    <ListUsers Item={Item} index={index} />
                  )
                })}
              </tbody>
            </table>

          </div>
          <div className="max-w-4xl mt-2 mx-auto flex flex-row justify-end">
            <button onClick={handlePrevClick}>previous</button>
            <input className="text-center w-16 border ml-2 mr-2" disabled value={currentPage} />
            <button className="pl-7 pr-7" onClick={handleNextClick}>next</button>
          </div>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { getUsers } from "../../../Api/AdminApi";
import ListUsers from "../../../components/admin/listUsers/ListUsers";

export default function UserManage() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      const userData = await getUsers()
      setUsers(userData)
    }
    apiCall()
  },[])

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
                {users?.map((Item, index) => {
                  return (
                    <ListUsers Item={Item} index={index} />
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

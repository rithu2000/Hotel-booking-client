import { useState } from "react";
import Swal from 'sweetalert2'
import { blockUser } from "../../../Api/AdminApi";

export default function ListUsers({ Item, index }) {

    const [active, setActive] = useState(Item.access);
    const blockAction = async (userId) => {
        await blockUser(false, userId);
        setActive(false);
    };
    const unblockAction = async (userId) => {
        await blockUser(true, userId);
        setActive(true);
    };

    const BlockUser = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to block this user!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Block!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await blockAction(Item._id);
                Swal.fire(
                    'Blocked!',
                    'You have succesfully blocked the user.',
                    'success'
                )
            }
        })
    };
    const UnBlockUser = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to Unblock this user!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, UnBlock!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await unblockAction(Item._id);
                Swal.fire(
                    'Unblocked!',
                    'You have succesfully unblocked the user.',
                    'success'
                )
            }
        })
    };

    return (
        <>
            <tr className="b-white border-b-2 ">
                <td className="p-3 pt-7  text-md text-white">{index + 1}</td>
                <td className="p-3 pt-7 text-md text-white">{Item.firstName}</td>
                <td className="p-3 pt-7 text-md text-white">{Item.lastName}</td>
                <td className="p-3 pt-7 text-md text-white">{Item.email}</td>
                {active ? (
                    <button type="button" className="mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={BlockUser}>
                        Block
                    </button>
                ) : (
                    <button type="button" className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={UnBlockUser}>
                        Unblock
                    </button>
                )}
            </tr>
        </>
    );
};
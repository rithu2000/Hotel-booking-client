import { useState } from "react";
import { blockUser } from "../../../helper/AdminApi";


export default function ListUsers({ Item, index }) {
    const [active, setActive] = useState(Item.access);
    const blockAction = async (userId) => {
        await blockUser(false, userId);
        setActive(false);
        //  dispatch(hideLoading())
    };
    const unblockAction = async (userId) => {
        await blockUser(true, userId);
        setActive(true);
    };
    return (
        <>
            <tr className="b-white border-b-2 ">
                <td className="p-3 pt-7  text-md text-white">{index + 1}</td>
                <td className="p-3 pt-7 text-md text-white">{Item.firstName}</td>
                <td className="p-3 pt-7 text-md text-white">{Item.lastName}</td>
                <td className="p-3 pt-7 text-md text-white">{Item.email}</td>

                {active ? (
                    <button
                        type="button"
                        onClick={() => {
                            blockAction(Item._id);
                        }}
                        className="mt-4 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Block
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => {
                            unblockAction(Item._id);
                        }}
                        className="mt-4 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Unblock
                    </button>
                )}
            </tr>
        </>
    );
}

import { useEffect, useState } from "react";
import { rooms } from "../../../Api/AdminApi";
import ListRoom from "../../../components/admin/listRoom/ListRoom";

function ViewRoom() {
    const [room, setRoom] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = room.slice(indexOfFirstItem, indexOfLastItem);


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(room.length / itemsPerPage); i++) {
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


    const getAllRoom = async () => {
        try {
            const data = await rooms();
            setRoom(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllRoom();
    }, []);

    return (
            <div className="container mx-auto bg-[#FFFFFF] max-md:pl-16 ">
                <div className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                    <h1 className=" text-white text-center text-lg font-semibold ">List of Rooms</h1>
                    <table className="w-full mt-5">
                        <thead className="bg-gray-50 border-b-2 border-stone-700 ">
                            <tr className="b-white border-b-2 ">
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                    Name
                                </th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                                    HotelId
                                </th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-gray-800 ">
                            <tr class="text-white"></tr>
                            {currentItems?.map((room) => (
                                <ListRoom room={room} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="max-w-4xl mt-2 mx-auto flex flex-row justify-end">
                    <button onClick={handlePrevClick}>previous</button>
                    <input className="text-center w-16 border ml-2 mr-2" disabled value={currentPage} />
                    <button className="pl-7 pr-7" onClick={handleNextClick}>next</button>
                </div>
            </div>
    );
}

export default ViewRoom;

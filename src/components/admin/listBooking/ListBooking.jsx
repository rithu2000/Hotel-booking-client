
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function ListBooking({ Item, index }) {

    return (
        <>
            <tr className="b-white border-b-2 ">
                <td className="p-3 pt-7  text-md text-white">{index + 1}</td>
                <td className="p-3 pt-7 text-md text-white">{Item.name}</td>
                <td className="p-3 pt-7 text-md text-white">{Item.checkin}</td>
                <td className="p-3 pt-7 text-md text-white">{Item.checkout}</td>
                <td className="p-3 pt-7 text-md text-white">₹{Item.total}</td>
                {/* <button className="mt-4 px-6 py-2.5 font-medium text-xs  uppercase rounded-full" onClick={() => {
                    navigate('/admin/bookedRoom', { state: { roomId: Item.roomId } })
                }} >View</button> */}
            </tr>
        </>
    )
};
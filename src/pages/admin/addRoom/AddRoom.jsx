import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/AlertSlice";
import { addingRoom, uploadImage } from '../../../Api/AdminApi'
import { useLocation } from "react-router-dom";

export default function AddRoom() {

    const dispatch = useDispatch();
    const locations = useLocation()
    const data = locations?.state?.hotelId;
    let Id = data.hotel._id

    const [room, setRoom] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([])
    const [errMessage, seterrMessage] = useState('')


    const addRoom = async (e) => {
        e.preventDefault();
        if (room.trim().length > 0 && price.trim().length > 0 && description.trim().length > 0) {

            let images = []
            if (images.length > 0) {

                dispatch(showLoading());
                for (let i = 0; i < image.length; i++) {
                    const url = await uploadImage(image[i])
                    images.push(url)
                }
            } else {
                return seterrMessage("Please upload an image")
            }

            if (images.length) {
                const addRoom = {
                    hotelId: Id,
                    room,
                    price,
                    description,
                    images,
                };

                try {

                    dispatch(showLoading());
                    const result = await addingRoom(addRoom, Id)
                    dispatch(hideLoading());
                    setRoom("")
                    setPrice("")
                    setDescription("")
                    toast.success(result.message);

                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            seterrMessage("Please fill the form")
            dispatch(hideLoading());
        }
    }
    return (
        <>
            <div>
                <div>
                    <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                        <h1 class="text-xl font-bold text-white capitalize dark:text-white">Add Room</h1>
                        <form >
                            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label class="text-white dark:text-gray-200" for="username">Room Type</label>
                                    <input id="Type" name="room" type="text" value={room} onChange={(e) => { setRoom(e.target.value) }} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                                </div>

                                <div>
                                    <label class="text-white dark:text-gray-200" for="emailAddress">Description</label>
                                    <input id="description" name="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                                </div>

                                <div>
                                    <label class="text-white dark:text-gray-200" for="passwordConfirmation">Price</label>
                                    <input id="passwordConfirmation" type="number" value={price} onChange={(e) => setPrice(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-white">
                                        Image
                                    </label>
                                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div class="space-y-1 text-center">
                                            <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <div class="flex text-sm text-gray-600">
                                                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span class="">Upload a file</span>
                                                    <input id="file-upload" name="files[]" onChange={(e) => setImage([...image, e.target.files[0]])} type="file" multiple class="sr-only" />
                                                </label>
                                                <p class="pl-1 text-white">or drag and drop</p>
                                            </div>
                                            <p class="text-xs text-white">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            {errMessage && <p className="text-red-700">{errMessage}</p>}

                            </div>
                            <div class="flex justify-end mt-6">
                                <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600" onClick={addRoom}>Confirm</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

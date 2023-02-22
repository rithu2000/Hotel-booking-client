import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../../redux/AlertSlice";
import { updateHotel } from '../../../helper/AdminApi'
import { useLocation } from "react-router-dom";

export default function EditHotel() {

    const dispatch = useDispatch();
    const locations = useLocation()
    const [hotel, setHotel] = useState("");
    const [hotelDetail, setHotelDetail] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);

    const data = locations?.state?.hotelId;
    let Id = data.hotel._id

    console.log(hotel);
    console.log(location);
    console.log(description);
    const cloudAPI = 'dcfbzgrgb'

    const getHotelById = async (hotelId) => {
        console.log(Id, "inside")
        try {

            console.log(hotelId, "hotel by Id")
            const data = await updateHotel(hotelId)
            setHotelDetail(data)
            console.log(data, "lllllllllll")
            console.log(data.hotel, "hotelllllllllllId")

        } catch (error) {
            console.log(error);
        }
    }

    const editHotel = async (e) => {
        e.preventDefault();
        dispatch(showLoading());
        
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'ureaug60');
        console.log(formData);
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`, formData)
        const imageUrl = response.data.url

        if (response?.data.url) {
            const update = {
                id: Id,
                hotel,
                location,
                description,
                category,
                imageUrls: imageUrl,
            };

            try {
                dispatch(showLoading());

                console.log(update, "frond add");
                const result = await updateHotel(update)
                console.log(result);
                toast.success(result.message);
                setHotel("")
                setDescription("")
                setLocation("")
                setImage("")
                dispatch(hideLoading());
            } catch (error) {
                console.log(error);
            }
        }
        console.log(response);
    };
    useEffect(() => {
        getHotelById(Id)
    }, [])

    return (
        <div>
            <div>
                <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                    <h1 class="text-xl font-bold text-white capitalize dark:text-white">Edit Hotel</h1>
                    <form >
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label class="text-white dark:text-gray-200" for="username">Name</label>
                                <input id="hotel" name="hotel" type="text" value={hotel ? hotel : hotelDetail?.hotel} onChange={(e) => { setHotel(e.target.value) }} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                            </div>

                            <div>
                                <label class="text-white dark:text-gray-200" for="emailAddress">Location</label>
                                <input id="location" type="text" value={hotel ? location : hotelDetail?.location} onChange={(e) => setLocation(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                            </div>
                            <div>
                                <label class="text-white dark:text-gray-200" for="category">Category</label>
                                <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={(e) => setCategory(e.target.value)} value={category} required>
                                    <option>Villa</option>
                                    <option>Resort</option>
                                    <option>Hotel</option>
                                    <option>Bangalow</option>
                                </select>
                            </div>
                            <div>
                                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Description</label>
                                <textarea id="description" type="text" onChange={(e) => setDescription(e.target.value)} value={hotel ? description : hotelDetail?.description} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required></textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-white">Image</label>
                                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div class="space-y-1 text-center">
                                        <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span class="">Upload a file</span>
                                                <input id="file-upload" name="image" onChange={(e) => setImage(e.target.files[0])} type="file" class="sr-only" />
                                            </label>
                                            <p class="pl-1 text-white">or drag and drop</p>
                                        </div>
                                        <p class="text-xs text-white">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end mt-6">
                            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600" onClick={editHotel} >Confirm</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

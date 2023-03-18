import { React, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { showLoading, hideLoading } from "../../../redux/AlertSlice";
import { updateHotel, uploadImage } from '../../../Api/AdminApi'
import { useLocation } from "react-router-dom";

export default function EditHotel() {

    const dispatch = useDispatch();
    const locations = useLocation()

    const data = locations?.state?.hotelId;
    const hotelData = data.hotel
    const Id = data.hotel._id

    const [hotel, setHotel] = useState(hotelData.hotel);
    const [location, setLocation] = useState(hotelData.location);
    const [category, setCategory] = useState(hotelData.category);
    const [description, setDescription] = useState(hotelData.description);
    const [image, setImage] = useState(hotelData.images);
    const [errMessage, seterrMessage] = useState('')


    const editHotel = async (e) => {
        e.preventDefault();
        if (hotel.trim().length > 0 && location.trim().length > 0 && description.trim().length > 0 && category.length > 0) {

            // dispatch(showLoading());
            console.log(image, "usestater");

            let images = []

            if (image.length > 0) {

                console.log(image, "lengthhhhhhhh");
                for (let i = 0; i < image; i++) {
                    const url = await uploadImage(image[i])
                    console.log("success");
                    images.push(url)
                }
            } else {
                return seterrMessage("Please upload an image")
            }
            if (images) {
                const update = {
                    hotel,
                    location,
                    description,
                    category,
                    images,
                };

                try {
                    // dispatch(showLoading());
                    console.log("qwerty");
                    const result = await updateHotel(update, Id)
                    console.log("ytrewq");
                    console.log(result);
                    toast.success(result.message);
                    setHotel("")
                    setDescription("")
                    setLocation("")
                    setImage("")
                    // dispatch(hideLoading());
                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            seterrMessage("Please fill the form")
            dispatch(hideLoading());
        }
    };

    const removeImage = (i) => {
        setImage(image.filter((x) => x.name !== i));
    };

    return (
        <div>
            <div>
                <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                    <h1 className="text-xl font-bold text-white capitalize dark:text-white">Edit Hotel</h1>
                    <form >
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-white dark:text-gray-200" for="username">Name</label>
                                <input id="hotel" name="hotel" type="text" value={hotel} onChange={(e) => { setHotel(e.target.value) }} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                            </div>

                            <div>
                                <label className="text-white dark:text-gray-200" for="emailAddress">Location</label>
                                <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
                            </div>
                            <div>
                                <label className="text-white dark:text-gray-200" for="category">Category</label>
                                <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={(e) => setCategory(e.target.value)} value={category} required>
                                    <option>Hotel</option>
                                    <option>Villa</option>
                                    <option>Resort</option>
                                    <option>Bangalow</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-white dark:text-gray-200" for="passwordConfirmation">Description</label>
                                <textarea id="description" type="text" onChange={(e) => setDescription(e.target.value)} value={description} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white">Image</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600">
                                            <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span className="">Upload a file</span>
                                                <input id="file-upload" name="image" accept="image/*" onChange={(e) => setImage(...image, e.target.files[0])} type="file" class="sr-only" />
                                            </label>
                                            <p className="pl-1 text-white">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-white">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            {errMessage && <p className="text-red-700">{errMessage}</p>}

                            </div>
                            {/* <div className="flex">
                                <div className=" flex">
                                    {image && image.length > 0
                                        ? image.map((file, key) => {
                                            console.log(file, "filesssss");
                                            if (file) {
                                                console.log("yes");
                                            } else {
                                                console.log("yes");
                                            }
                                            return (
                                                <div className="left flex justify-end ">
                                                    <i
                                                        onClick={() => {
                                                            removeImage(file.name);
                                                        }}
                                                        className="mdi mdi-close absolute  hover:text-white cursor-pointer"
                                                    >
                                                        <div className="flex">
                                                            {React.createElement(AiOutlineCloseCircle, {
                                                                size: "20",
                                                            })}
                                                        </div>
                                                    </i>
                                                    l
                                                    <img src={URL.createObjectURL(file)} alt="" />
                                                </div>
                                            );
                                        })
                                        : hotelData
                                            ? hotelData?.images.map((img) => (
                                                <div className="left flex justify-end ">
                                                    <i
                                                        onClick={() => {
                                                            removeImage(img.name);
                                                        }}
                                                        className="mdi mdi-close absolute  hover:text-white cursor-pointer"
                                                    >
                                                        <div className="flex">
                                                            {React.createElement(AiOutlineCloseCircle, {
                                                                size: "20",
                                                            })}
                                                        </div>
                                                    </i>
                                                    l
                                                    <img src={img} alt="" />
                                                </div>
                                            ))
                                            : null}
                                </div>
                            </div> */}
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

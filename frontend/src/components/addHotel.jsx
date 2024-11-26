import { useState } from "react";

const AddHotel = () => {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        location: "",
        rating: "",
        website: "",
        phoneNumber: "",
        checkInTime: "",
        checkOutTime: "",
        amenities: "",
        priceRange: "",
        reservationNeeded: false,
        isParkingAvailable: false,
        isWifiAvailable: false,
        isPoolAvailable: false,
        isSpaAvailable: false,
        isRestaurantAvailable: false,
        photos: ""
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const response = await fetch("http://localhost:3001/hotels", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                console.log("Failed to add hotel");
                return;
            }

            const data = await response.json();
            console.log("Added hotel", data);
        } catch (error) {
            console.error("Error adding hotel:", error);
        }
    };

    return (
        <form id="postForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label><br />
            <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
            /><br /><br />

            <label htmlFor="category">Category</label><br />
            <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
            >
                <option value="">Select Category</option>
                <option value="3-star">3-star</option>
                <option value="4-star">4-star</option>
                <option value="5-star">5-star</option>
            </select><br /><br />

            <label htmlFor="location">Location</label><br />
            <input
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
            /><br /><br />

            <label htmlFor="rating">Rating</label><br />
            <input
                type="number"
                name="rating"
                id="rating"
                value={formData.rating}
                onChange={handleChange}
            /><br /><br />

            <label htmlFor="website">Website</label><br />
            <input
                type="text"
                name="website"
                id="website"
                value={formData.website}
                onChange={handleChange}
            /><br /><br />

            <label htmlFor="phoneNumber">Phone Number</label><br />
            <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
            /><br /><br />

            <label htmlFor="checkInTime">Check-In Time</label><br />
            <input
                type="text"
                name="checkInTime"
                id="checkInTime"
                value={formData.checkInTime}
                onChange={handleChange}
            /><br /><br />

            <label htmlFor="checkOutTime">Check-Out Time</label><br />
            <input
                type="text"
                name="checkOutTime"
                id="checkOutTime"
                value={formData.checkOutTime}
                onChange={handleChange}
            /><br /><br />

            <label htmlFor="amenities">Amenities</label><br />
            <input
                type="text"
                name="amenities"
                id="amenities"
                value={formData.amenities}
                onChange={handleChange}
            /><br /><br />

            <label htmlFor="priceRange">Price Range</label><br />
            <select
                name="priceRange"
                id="priceRange"
                value={formData.priceRange}
                onChange={handleChange}
            >
                <option value="">Select Price Range</option>
                <option value="11-30">11-30</option>
                <option value="31-50">31-50</option>
                <option value="51-70">51-70</option>
                <option value="71-90">71-90</option>
                <option value="91-110">91-110</option>
            </select><br /><br />

            <label>
                <input
                    type="checkbox"
                    name="reservationNeeded"
                    checked={formData.reservationNeeded}
                    onChange={handleChange}
                />
                Reservation Needed
            </label><br /><br />

            <label>
                <input
                    type="checkbox"
                    name="isParkingAvailable"
                    checked={formData.isParkingAvailable}
                    onChange={handleChange}
                />
                Parking Available
            </label><br /><br />

            <label>
                <input
                    type="checkbox"
                    name="isWifiAvailable"
                    checked={formData.isWifiAvailable}
                    onChange={handleChange}
                />
                Wifi Available
            </label><br /><br />

            <label>
                <input
                    type="checkbox"
                    name="isPoolAvailable"
                    checked={formData.isPoolAvailable}
                    onChange={handleChange}
                />
                Pool Available
            </label><br /><br />

            <label>
                <input
                    type="checkbox"
                    name="isSpaAvailable"
                    checked={formData.isSpaAvailable}
                    onChange={handleChange}
                />
                Spa Available
            </label><br /><br />

            <label>
                <input
                    type="checkbox"
                    name="isRestaurantAvailable"
                    checked={formData.isRestaurantAvailable}
                    onChange={handleChange}
                />
                Restaurant Available
            </label><br /><br />

            <label htmlFor="photos">Photos</label><br />
            <input
                type="text"
                name="photos"
                id="photos"
                value={formData.photos}
                onChange={handleChange}
            /><br /><br />

            <button type="submit" id="btnSubmit">Add Hotel</button>
        </form>
    );
};

export default AddHotel;

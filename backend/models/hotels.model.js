const mongoose = require("mongoose")

const HotelSchema = new mongoose.Schema({
    name: String,
    category: {
        type: String,
        enum: ["3-star", "4-star", "5-star"]
    },
    location: String,
    rating: Number,
    website: String,
    phoneNumber: Number,
    checkInTime: String,
    checkOutTime: String,
    amenities: String,
    priceRange: {
        type: String,
        enum: ["11-30", "31-50", "51-70", "71-90", "91-110"]
    },
    reservationNeeded: Boolean,
    isParkingAvailable: Boolean,
    isWifiAvailable: Boolean,
    isPoolAvailable: Boolean,
    isSpaAvailable: Boolean,
    isRestaurantAvailable: Boolean,
    photos: String,
})

const Hotels = mongoose.model("Hotels", HotelSchema)

module.exports = Hotels
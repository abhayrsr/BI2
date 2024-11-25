const { initializeDatabase } = require("./db/db.connect");
const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");
const Hotels = require("./models/hotels.model");

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

initializeDatabase();

const jsonData = fs.readFileSync("hotels.json", "utf-8");
const hotelsData = JSON.parse(jsonData);

async function seedingData() {
  try {
    for (const hotel of hotelsData) {
      const newHotel = new Hotels({
        name: hotel.name,
        category: hotel.category,
        location: hotel.location,
        rating: hotel.rating,
        website: hotel.website,
        phoneNumber: hotel.phoneNumber,
        checkInTime: hotel.checkInTime,
        checkOutTime: hotel.checkOutTime,
        amenities: hotel.amenities,
        priceRange: hotel.priceRange,
        reservationNeeded: hotel.reservationNeeded,
        isParkingAvailable: hotel.isParkingAvailable,
        isWifiAvailable: hotel.isWifiAvailable,
        isPoolAvailable: hotel.isPoolAvailable,
        isSpaAvailable: hotel.isSpaAvailable,
        isRestaurantAvailable: hotel.isRestaurantAvailable,
        photos: hotel.photos,
      });
      newHotel.save();
    }
  } catch (error) {
    throw error;
  }
}

// seedingData()

const createHotel = async (newHotel) => {
  try {
    const hotel = new Hotels(newHotel);
    hotel.save();
    return hotel;
  } catch (error) {
    throw error;
  }
};

app.post("/hotels", async (req, res) => {
  try {
    const savedHotel = await createHotel(req.body);
    res
      .status(200)
      .json({ message: "Data saved successfully", hotel: savedHotel });
  } catch (error) {
    res.status(500).json({ error: "Failed to add hotel" });
  }
});

const readAllHotels = async () => {
  try {
    const allHotels = await Hotels.find();
    return allHotels;
  } catch (error) {
    console.log(error);
  }
};

app.get("/hotels", async (req, res) => {
  try {
    const hotels = await readAllHotels();
    if (hotels.length != 0) {
      return res.json(hotels);
    } else {
      res.status(404).json({ error: "No hotel found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hotels" });
  }
});

const readHotelsByName = async (hotelName) => {
  try {
    const hotel = await Hotels.findOne({ name: hotelName });
    return hotel;
  } catch (error) {
    throw error;
  }
};

app.get("/hotels/:name", async (req, res) => {
  try {
    const hotels = await readHotelsByName(req.params.name);
    if (hotels.length != 0) {
      res.json(hotels);
    } else {
      res.status(404).json({ error: "Hotel not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch hotel" });
  }
});

const deleteHotels = async (hotelId) => {
  try {
    const hotel = await Hotels.findByIdAndDelete(hotelId);
    return hotel;
  } catch (error) {
    console.log("Error in deleting hotel", error);
  }
};

app.delete("/hotels/:hotelId", async (req, res) => {
  try {
    const deleteHotel = await deleteHotels(req.params.hotelId);
    if(deleteHotel){
        res.status(200).json({message: "Hotel deleted successfully"})
    }
  } catch (error) {
    res.status(500).json({error: "Failed to fetch hotel"})
  }
});

app.listen(3001, () => {
    console.log("Server is listening to port 3001")
} )

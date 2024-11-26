import useFetch from "../useFetch";
import { useState } from "react";

const Hotels = () => {
    const { data, loading } = useFetch("http://localhost:3001/hotels")
    const [successMessage, setSuccessMessage] = useState('')

    const handleDelete = async(hotelId) => {
       try {
        const response = await fetch(`http://localhost:3001/hotels/${hotelId}`, { method: "DELETE"})
        if(!response.ok){
            throw "Failed to delete book."
        }

        const data = await response.json()
        if(data){
            setSuccessMessage("Hotel deleted successfully")
            window.location.reload()
        } 
       } catch (error) {
         console.log(error)
       }
    }
    
    return (
        <>
            <h2>All Hotels</h2>
            {loading && <p>Loading...</p>}
      {data?.error && <p>{data?.error}</p>}
            <ul>
            {data?.map((ele, i) => (
                <li key={i}>{ele.name}<button onClick={() => handleDelete(ele._id)}>delete</button></li>
            ))}
            </ul>
            <p>{successMessage}</p>
        </>
    )
}

export default Hotels
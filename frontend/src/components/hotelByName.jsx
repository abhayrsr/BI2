import useFetch from "../useFetch";

const HotelByName = ({name}) => {
    const {data} = useFetch(`http://localhost:3001/hotels/${name}`)
    return (
        <>
            <h2>{name}</h2>
            <p><strong>Location: </strong>{data?.location}</p>
            <p><strong>Rating: </strong>{data?.rating}</p>
            <p><strong>Price Range: </strong>$$ ({data?.priceRange})</p>
        </>
    )
}

export default HotelByName
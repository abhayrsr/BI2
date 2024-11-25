import useFetch from "../useFetch";

const Hotels = () => {
    const { data } = useFetch("http://localhost:3001/hotels")
    
    return (
        <>
            <h2>All Hotels</h2>
            <ul>
            {data?.map((ele, i) => (
                <li key={i}>{ele.name}</li>
            ))}
            </ul>
        </>
    )
}

export default Hotels
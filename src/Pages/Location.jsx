import { useNavigate } from "react-router-dom";
import { useLocations } from "../hooks/useLocations"
import LocationCard from "../Components/view-locations/LocationCard";
import { useEffect, useState } from "react";
function ViewLocation() {
    const [location, setLocation] = useState("")

    const navigate = useNavigate()
    const { locationData } = useLocations()

    useEffect(() => {
        if (locationData.data) {
            setLocation(locationData.data)
        }
    }, [locationData.data])


    const handlePage = async (url) => {
        try {
            let res = await fetch(url)
            let data = await res.json()
            setLocation(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (<>
        <button className="btn btn-dark" onClick={() => navigate(-1)}>←</button>
        <section>
            <h1 className="w-100 text-center display-3 my-5">Locations</h1>
            <main className="location-grid">
                {location?.results?.map(location => <LocationCard key={location.name} location={location} />)}
            </main>

        </section>
        <div className="w-100 d-flex justify-content-between my-5 px-4">
            <button className="btn btn-outline-primary btn-lg px-5" disabled={location?.previous ? false : true} onClick={() => handlePage(location?.previous)}>Prev</button>
            <button className="btn btn-outline-primary btn-lg px-5" disabled={location?.next ? false : true} onClick={() => handlePage(location?.next)}>Next</button>
        </div>
    </>);
}

export default ViewLocation;
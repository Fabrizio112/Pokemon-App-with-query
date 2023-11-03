import { useEffect, useState } from "react";
import { getIndividualLocationData } from "../../helpers/functionFetch";

function LocationCard({ location }) {
    const [locationInfo, setLocationInfo] = useState("")
    useEffect(() => {
        getIndividualLocationData(location.url).then((data) => {
            setLocationInfo(data)
        })
    }, [])


    return (<>
        <div className="card" style={{ width: "18rem" }}>
            <h2 className="text-capitalize">{locationInfo?.name}</h2>
            <div className="card-body">
                <p className="card-text fs-4 text-capitalize"><span className="text-decoration-underline">Region :</span> {locationInfo?.region?.name}</p>
            </div>
        </div></>);
}

export default LocationCard;
import { useQuery } from "@tanstack/react-query"
import { getLocations } from "../helpers/functionFetch"

export const useLocations = () => {
    const locationData = useQuery({
        queryKey: ["location"],
        queryFn: () => getLocations()
    })

    return {
        locationData
    }
}
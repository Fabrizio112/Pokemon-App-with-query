import { useQuery } from "@tanstack/react-query"
import { getItemsData } from "../helpers/functionFetch"

export const useItems = () => {

    const itemsData = useQuery({
        queryKey: ["items"],
        queryFn: () => getItemsData()
    })

    return {
        itemsData
    }
}
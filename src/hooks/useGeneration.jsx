import { useQuery } from "@tanstack/react-query";
import { getGeneration } from "../helpers/functionFetch";
import { useSelector } from "react-redux";



export function useGeneration() {
    const generation = useSelector(state => state.generation)
    const generationData = useQuery({
        queryKey: ["generation", generation],
        queryFn: () => getGeneration(generation),
        enabled: generation != undefined
    })

    return {
        generationData
    }
}

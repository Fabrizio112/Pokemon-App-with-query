import { useQuery } from "@tanstack/react-query";
import { getGenerationButtons } from "../helpers/functionFetch";

export function useGenerationButtons() {
    const generationButtonData = useQuery({
        queryKey: ["generation-buttons"],
        queryFn: () => getGenerationButtons()
    })

    return {
        generationButtonData
    }
}

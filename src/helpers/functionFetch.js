import { CONSTANST } from "../constants/constants"

export async function getGenerationButtons() {
    try {
        let res = await fetch(`${CONSTANST.URL_BASE}${CONSTANST.GENERATION}`)
        let data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getPokemons(pokemon) {
    try {
        let res = await fetch(`${CONSTANST.URL_BASE}${CONSTANST.POKEMON}/${pokemon}`)
        let data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function getGeneration(generation) {
    if (generation) {
        try {
            let res = await fetch(`${CONSTANST.URL_BASE}${CONSTANST.GENERATION}/${generation}`)
            let data = await res.json()
            console.log(data)
            return data
        } catch (error) {
            console.error(error)
        }
    }
}

export const getItemsData = async () => {
    try {
        let res = await fetch(`${CONSTANST.URL_BASE}${CONSTANST.ITEMS}`)
        let data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getIndividualItemData = async (itemURL) => {
    try {
        let res = await fetch(itemURL)
        let data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getLocations = async () => {
    try {
        let res = await fetch(`${CONSTANST.URL_BASE}${CONSTANST.LOCATIONS}`)
        let data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getIndividualLocationData = async (locationUrl) => {
    try {
        let res = await fetch(locationUrl)
        let data = await res.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
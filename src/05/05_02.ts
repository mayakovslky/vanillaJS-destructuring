import {GovernmentBuildingsType, HouseType} from "../02/02_02";
import {createMessage} from "../03/03";

export const getStreetsTitlesOfGovernmentBuildings =
    (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map( b => b.address.street.title)
}

export const getStreetsTitlesOfHouses =
    (houses: Array<HouseType>) => {
    return houses.map( b => b.address.street.title)
}

export function createMessages(houses: Array<HouseType>) {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}
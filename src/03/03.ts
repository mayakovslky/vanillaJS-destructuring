import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";


export const addSkill = (student: StudentType, skill: string) =>
{
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (h: HouseType) => {
    h.repaired = true;
}

export const toFireStaff = (b: GovernmentBuildingsType, staffCountToFire: number) => {
    b.staffCount -= staffCountToFire;
}

export function toHireStaff(b: GovernmentBuildingsType, staffCountToHire: number) {
    b.staffCount += staffCountToHire;
}

export function createMessage(props: CityType) {
    // return 'Hello ' + props.title + ' citiziens. I want you be happy. All ' + props.citiziensNumber + ' men'
    return `Hello ${props.title} citiziens. I want you be happy. All ${props.citiziensNumber} men`;
}
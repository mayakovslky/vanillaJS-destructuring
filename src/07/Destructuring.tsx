import {ManType} from "./destructuring.test";
import {useState} from "react";

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}
// yourself useState

// function useVovichState(m: string)  {
//     return [m, function (){}]
// }

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    const [message, setMessage] = useState<string>('hello')

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{props.car.model}</div>
        </div>
    )
}
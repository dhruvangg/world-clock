import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Timezone } from "../Components/Clock/Timezone";

export default function Clock() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000);
    }, [time])

    return (
        <>
            <div>{dayjs(time).format('DD/MM/YYYY HH:mm:ss')}</div>
            {/* <Timezone /> */}
        </>
    )
}

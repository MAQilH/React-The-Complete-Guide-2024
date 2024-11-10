import { useEffect, useState } from "react";

const TIKE_TIME = 10

export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer)

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - TIKE_TIME)
        }, TIKE_TIME)
        console.log('this is working')
        return () => {
            clearInterval(timeInterval)
        }
    }, [])

    return <progress value={remainingTime} max={timer}/>
}
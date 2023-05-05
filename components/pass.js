import { Button } from "@mui/material";
import { useState} from "react";


export function useattPassComplete() {
    const [attPassCompButtonCount, setbuttoncount] = useState(0)

    const attPassComp = () => setbuttoncount(value => value + 1)
    return {
        attPassCompButtonCount,
        attPassComp
    }
}

export function useAttPassIncomplete() {
    const [attPassIncompButtonCount, setbuttoncount] = useState(0)

    const attPassIncomp = () => setbuttoncount(value => value + 1)
    return {
        attPassIncompButtonCount,
        attPassIncomp
    }
}

export function useDefPassComplete() {
    const [defPassCompButtonCount, setbuttoncount] = useState(0)

    const defPassComp = () => setbuttoncount(value => value + 1)
    return {
        defPassCompButtonCount,
        defPassComp
    }
}

export function useDefPassIncomplete() {
    const [defPassIncompButtonCount, setbuttoncount] = useState(0)

    const defPassIncomp = () => setbuttoncount(value => value + 1)
    return {
        defPassIncompButtonCount,
        defPassIncomp
    }
}
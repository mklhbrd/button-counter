import { Button } from "@mui/material";
import { useState} from "react";


export function attPassingComp() {
    const [attPassCompButtonCount, setbuttoncount1] = useState(0)

    const attPassComp = () => setbuttoncount1(value => value + 1)
    return {
        attPassCompButtonCount,
        attPassComp
    }
}

export function attPassingInomp() {
    const [attPassIncompButtonCount, setbuttoncount2] = useState(0)

    const attPassIncomp = () => setbuttoncount2(value => value + 1)
    return {
        attPassIncompButtonCount,
        attPassIncomp
    }
}

export function defPassingComp() {
    const [defPassCompButtonCount, setbuttoncount3] = useState(0)

    const defPassComp = () => setbuttoncount3(value => value + 1)
    return {
        defPassCompButtonCount,
        defPassComp
    }
}

export function defPassingIncomp() {
    const [defPassIncompButtonCount, setbuttoncount4] = useState(0)

    const defPassIncomp = () => setbuttoncount4(value => value + 1)
    return {
        defPassIncompButtonCount,
        defPassIncomp
    }
}
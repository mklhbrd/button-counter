import { Button } from "@mui/material";
import { useState} from "react";


export function useShotOnTarget() {
    const [ButtonCount5, setbuttoncount] = useState(0)

    const buttonClicked5 = () => setbuttoncount(value => value + 1)
    return {
        ButtonCount5,
        buttonClicked5
    }
}

export function useShotOffTarget() {
    const [ButtonCount6, setbuttoncount] = useState(0)

    const buttonClicked6 = () => setbuttoncount(value => value + 1)
    return {
        ButtonCount6,
        buttonClicked6
    }
}
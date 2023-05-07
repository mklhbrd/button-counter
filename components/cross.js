import { Button } from "@mui/material";
import { useState} from "react";


export function useCross() {
    const [ButtonCount8, setbuttoncount] = useState(0)

    const buttonClicked8 = () => setbuttoncount(value => value + 1)
    return {
        ButtonCount8,
        buttonClicked8
    }
}
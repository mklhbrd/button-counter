import { Button } from "@mui/material";
import { useState} from "react";


export function useBigChance() {
    const [ButtonCount7, setbuttoncount] = useState(0)

    const buttonClicked7 = () => setbuttoncount(value => value + 1)
    return {
        ButtonCount7,
        buttonClicked7
    }
}
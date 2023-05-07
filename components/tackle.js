import { Button } from "@mui/material";
import { useState} from "react";


export function useTackle() {
    const [ButtonCount9, setbuttoncount] = useState(0)

    const buttonClicked9 = () => setbuttoncount(value => value + 1)
    return {
        ButtonCount9,
        buttonClicked9
    }
}
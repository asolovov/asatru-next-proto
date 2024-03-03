'use client'

import {useState} from "react";
import Alert, {AlertType} from "@/app/_components/alert/alert";

export default function AlertClient({msg, level}:{msg: string, level: AlertType}) {
    const [alert, setAlert] = useState(msg);
    const [alertType, _] = useState(level);

    const close = () => {
        setAlert("");
    }

    return (
        <>
            {msg && <Alert alertType={alertType} msg={alert} close={close}/>}
        </>
    )
}
'use client'

import {fetchAut} from "@/lib/asatruEncyclopediaAPI/adminAPI";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Alert, {AlertType} from "@/app/_components/alert/alert";
import {setAut} from "@/app/actions";

export default function AdminLogin() {
    const [msg, setMsg] = useState("");
    const [alertType, setAlertType] = useState("");
    const [key, setKey] = useState("");
    const router = useRouter();

    const login = async () => {
        console.log("login...");

        const {error, ok} = await fetchAut(key);
        if (!ok && error) {
            setAlertType(AlertType.err);
            setMsg(error.clientMsg);
            return;
        }

        await setAut(key);
        console.log("login ok");
        router.push('/admin');
    }

    const close = () => {
        setMsg("");
    }

    return (
        <div className={"articleContainer"}>
            {msg ? <Alert alertType={alertType as AlertType} msg={msg} close={close}/> : null}
            <h1>Требуется идентификация</h1>
            <input className={"input"} placeholder={"API-Key"} value={key} onChange={e => setKey(e.target.value)}/>
            <button onClick={() => login()} className={"btn"} style={{marginTop: 10}}>Войти</button>
        </div>
    )
}
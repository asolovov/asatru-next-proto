'use client'

export enum AlertType {
    success="alertSuccess",
    err="alertErr"
}

export default function Alert({alertType, msg, close}: {alertType: AlertType, msg: string, close: Function}) {
    return (
        <div className={`alertContainer ${alertType}`}>
            {msg}
            <span className={"alertClose"} onClick={() => close()}>x</span>
        </div>
    )
}
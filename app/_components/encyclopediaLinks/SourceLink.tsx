import Link from "next/link";

const Numbers: { [key: string]: string } = {
    "1": "¹",
    "2": "²",
    "3": "³",
    "4": "⁴",
    "5": "⁵",
    "6": "⁶",
    "7": "⁷",
    "8": "⁸",
    "9": "⁹",
}

export function InText({num}: { num: string }) {
    return (
        <Link href={`#${num}`} className={"link inText"}>{Numbers[num]}</Link>
    )
}

export function SourceLink({num, link, text}: { num: string, link: string, text: string }) {
    return (
        <p>{Numbers[num]} <Link href={link} target={"_blank"} id={num} className={"link"}>{text}</Link></p>
    )
}
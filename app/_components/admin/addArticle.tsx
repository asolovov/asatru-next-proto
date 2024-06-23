'use client'

import {FormEvent, useState} from "react";
import {addArticle} from "@/lib/asatruEncyclopediaAPI/adminAPI";
import Alert, {AlertType} from "@/app/_components/alert/alert";
import {Category} from "@/lib/asatruEncyclopediaAPI/models";

export default function AddArticle({aut, categories}: { aut: string, categories: Category[] }) {
    const [slug, setSlug] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [metaOG, setMetaOG] = useState("og.png");
    const [metaKeywords, setMetaKeywords] = useState("");
    const [category, setCategory] = useState("");

    const [msg, setMsg] = useState("");
    const [alertType, setAlertType] = useState("");

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("add article...");

        const {ok, error} = await addArticle(
            {
                id: slug,
                title: title,
                body: body,
                category: category,
                metadata: {
                    title: metaTitle,
                    og_path: metaOG,
                    keywords: metaKeywords.split(","),
                    description: metaDescription,
                }
            },
            aut);

        if (!ok && error) {
            console.log(`err add article: ${error.debug}`);
            setMsg(error.clientMsg);
            setAlertType(AlertType.err);
        } else {
            console.log("add article ok");
            setMsg("Статья добавлена успешно");
            setAlertType(AlertType.success);
        }
    }

    const close = () => {
        setMsg("");
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            {msg ? <Alert alertType={alertType as AlertType} msg={msg} close={close}/> : null}
            <div className={"row"}>
                <input placeholder={"Title"} className={"col3"} value={title} onInput={(e)=>{
                    const target = e.target as typeof e.target & {value: string};
                    setTitle(target.value);
                }} required/>
                <input placeholder={"Slug"} className={"col3"} value={slug} onInput={(e)=>{
                    const target = e.target as typeof e.target & {value: string};
                    setSlug(target.value);
                }} required/>
                <select className={"col3"} onChange={e => {
                    const target = e.target.value;
                    setCategory(target);
                }}>
                    {categories.map(c => c && <option key={c.slug} value={c.slug}>{c.name}</option>)}
                </select>
            </div>
            <div className={"row"}>
                <input placeholder={"Metadata title"} className={"col3"} value={metaTitle} onInput={(e)=>{
                    const target = e.target as typeof e.target & {value: string};
                    setMetaTitle(target.value);
                }} required/>
                <input placeholder={"OG path"} className={"col3"} value={metaOG} onInput={(e)=>{
                    const target = e.target as typeof e.target & {value: string};
                    setMetaOG(target.value);
                }} required/>
                <input placeholder={"Keywords"} className={"col3"} value={metaKeywords} onInput={(e)=>{
                    const target = e.target as typeof e.target & {value: string};
                    setMetaKeywords(target.value);
                }} required/>
            </div>
            <input placeholder={"Metadata description"} value={metaDescription} onInput={(e) => {
                const target = e.target as typeof e.target & { value: string };
                setMetaDescription(target.value);
            }} required/>
            <textarea rows={40} placeholder={"html code"} value={body} onInput={(e) => {
                const target = e.target as typeof e.target & { value: string };
                setBody(target.value);
            }} required/>
            <button>Create article</button>
        </form>
    )
}

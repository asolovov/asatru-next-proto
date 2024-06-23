'use client'

import {FormEvent, useState} from "react";
import Alert, {AlertType} from "@/app/_components/alert/alert";
import {Category, EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";
import {deleteArticle, updateArticle} from "@/lib/asatruEncyclopediaAPI/adminAPI";
import {redirect, useRouter} from "next/navigation";

export default function EditArticle({aut, article, categories}: { aut: string, article: EncyclopediaArticle,categories: Category[] }) {
    const router = useRouter();

    const [slug, setSlug] = useState(article.id);
    const [title, setTitle] = useState(article.title);
    const [body, setBody] = useState(article.body);
    const [metaTitle, setMetaTitle] = useState(article.metadata.title);
    const [metaDescription, setMetaDescription] = useState(article.metadata.description);
    const [metaOG, setMetaOG] = useState(article.metadata.og_path);
    const [metaKeywords, setMetaKeywords] = useState(article.metadata.keywords.join(","));
    const [category, setCategory] = useState(article.category);

    const [msg, setMsg] = useState("");
    const [alertType, setAlertType] = useState("");

    const handleDelete = async () => {
        console.log("delete article...");

        const {ok, error} = await deleteArticle(article.id, aut);

        if (!ok && error) {
            console.log(`err add article: ${error.debug}`);
            setMsg(error.clientMsg);
            setAlertType(AlertType.err);
        } else {
            console.log("add article ok");
            setMsg("Статья добавлена успешно");
            setAlertType(AlertType.success);
            router.push("/admin");
        }
    }

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("update article...");

        const {ok, error} = await updateArticle(
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
        <div>
            <p>Author: {article.author.name}</p>
            <form onSubmit={(e) => submit(e)}>
                {msg ? <Alert alertType={alertType as AlertType} msg={msg} close={close}/> : null}
                <div className={"row"}>
                    <input placeholder={"Title"} className={"col3"} value={title} onInput={(e) => {
                        const target = e.target as typeof e.target & { value: string };
                        setTitle(target.value);
                    }} required/>
                    <input placeholder={"Slug"} className={"col3"} value={slug} onInput={(e) => {
                        const target = e.target as typeof e.target & { value: string };
                        setSlug(target.value);
                    }} required/>
                    <select className={"col3"} defaultValue={category} onChange={e => {
                        const target = e.target.value;
                        setCategory(target);
                    }}>
                        {categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                    </select>
                </div>
                <div className={"row"}>
                    <input placeholder={"Metadata title"} className={"col3"} value={metaTitle} onInput={(e) => {
                        const target = e.target as typeof e.target & { value: string };
                        setMetaTitle(target.value);
                    }} required/>
                    <input placeholder={"OG path"} className={"col3"} value={metaOG} onInput={(e) => {
                        const target = e.target as typeof e.target & { value: string };
                        setMetaOG(target.value);
                    }} required/>
                    <input placeholder={"Keywords"} className={"col3"} value={metaKeywords} onInput={(e) => {
                        const target = e.target as typeof e.target & { value: string };
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
                <button>Update article</button>
            </form>
            <button onClick={handleDelete} style={{marginTop: 20}}>Delete</button>
        </div>
    )
}
'use client'

import {FormEvent, useState} from "react";
import parse, {domToReact, Element, HTMLReactParserOptions} from "html-react-parser"
import HtmlEditor from "@/app/_components/editor/htmlEditor";
import {addEncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
import Alert, {AlertType} from "@/app/_components/alert/alert";

export type AddArticleForm = {
    body: {value: string}
    title: {value: string}
    slug: {value: string}
}

export default function AddArticle({aut}: {aut: string}) {
    const [body, setBody] = useState("");
    const [viewCode, setViewCode] = useState("");
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [msg, setMsg] = useState("");
    const [alertType, setAlertType] = useState("");

    const view = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setViewCode(body);
    }

    const save = async (e: FormEvent) => {
        e.preventDefault();
        console.log("key from add:", aut)
        const target = e.target as typeof e.target & AddArticleForm;
        const resp = await addEncyclopediaArticle(
            {
                id: target.slug.value,
                title: target.title.value,
                body: target.body.value,
            }, aut
        );

        if (resp) {
            setAlertType(AlertType.err);
            setMsg(resp.clientMsg);
        }
    }

    const close = () => {
        setMsg("");
    }


    return (
        <div>
            {msg ? <Alert alertType={alertType as AlertType} msg={msg} close={close}/> : null}
            <form onSubmit={e => save(e)}>
                <input className={"input"}
                       placeholder={"Название статьи"}
                       style={{width: "50%"}}
                       value={title}
                       onChange={e => setTitle(e.target.value)}
                       id={"title"}
                       required
                />
                <input className={"input"}
                       placeholder={"ID статьи"}
                       style={{width: "50%"}}
                       value={slug}
                       onChange={e => setSlug(e.target.value)}
                       id={"slug"}
                       required
                />
                <HtmlEditor body={body} setBody={setBody}/>
                <button className={"btn"} style={{marginTop: 10}} formAction={"submit"}>Сохранить</button>
                <button className={"btn"} style={{marginTop: 10, marginLeft: 10}} onClick={e => view(e)} formNoValidate>Просмотр
                </button>
            </form>
            {viewCode && <div className={"articleContainer"}>
                <h1 className={"point"}>{title}</h1>
                {parse(viewCode)}
            </div>}
        </div>
    )
}
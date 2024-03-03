'use client'

export default function HtmlEditor({body, setBody}: { body: string, setBody: Function }) {
    return (
        <textarea
            id={"body"}
            rows={40}
            className={"input"}
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder={"<p>Внимайте мне все священные роды, великие с малыми Хеймдалля дети!<\p>"}
        />
    )
}
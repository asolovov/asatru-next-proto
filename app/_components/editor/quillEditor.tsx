'use client'

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import type ReactQuill from 'react-quill';

const QuillWrapper = dynamic(
    async () => {
        const {default: RQ} = await import('react-quill');
        // eslint-disable-next-line react/display-name
        return ({...props}) => <RQ {...props} />;
    },
    {
        loading: () => <p>Загружаю редактор...</p>,
        ssr: false,
    }
) as typeof ReactQuill;

export default function QuillEditor({body, setBody}: {body: string, setBody: Function}) {
    return (
        <div>
            <QuillWrapper
                theme={"snow"}
                modules={modules}
                value={body}
                onChange={e => setBody(e)}
                placeholder={"Внимайте мне все священные роды, великие с малыми Хеймдалля дети!"}
            />
        </div>
    )
}

const modules = {
    toolbar: [
        [{header: '2'}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            {list: 'ordered'},
            {list: 'bullet'},
            {indent: '-1'},
            {indent: '+1'},
        ],
        [{'align': []}],
        ['link', 'image']
    ],
    clipboard: {
        matchVisual: false,
    },
}

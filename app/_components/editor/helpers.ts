import { HTMLReactParserOptions, Element } from 'html-react-parser';
import parse from "html-react-parser"

export function lint(body: string) {
    return parse(body, options);
}


const options: HTMLReactParserOptions = {
    replace(domNode) {
        if (domNode instanceof Element && domNode.attribs) {
            console.log(domNode.attribs);
        }
    },
};


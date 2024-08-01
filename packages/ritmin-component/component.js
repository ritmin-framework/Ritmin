import { default as ErrorBoundary } from '../ritmin-error/error';
export default class CreateElement extends ErrorBoundary {
    static create(props) {
        const { tag, id, className, style, attributes, children } = props;
        const attrs = [
            id ? `id="${id}"` : '',
            className ? `class="${className}"` : '',
            style ? `style="${style}"` : '',
            ...Object.entries(attributes || {}).map(([key, value]) => `${key}="${value}"`),
        ]
            .filter(Boolean)
            .join(' ');
        const innerHtml = children
            ? children.map(CreateElement.create).join('')
            : '';
        return `<${tag} ${attrs}>${innerHtml}</${tag}>`;
    }
}
//# sourceMappingURL=component.js.map
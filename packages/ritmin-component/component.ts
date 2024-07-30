import { ErrorBoundary } from '../ritmin-error/error';
interface ElementProps {
  id?: string;
  className?: string;
  style?: string;
  attributes?: { [key: string]: string };
}
interface HtmlElementProps extends ElementProps {
  tag: string;
  children?: HtmlElementProps[];
}

class CreateElement extends ErrorBoundary{
  public static create(props: HtmlElementProps): string {
    const { tag, id, className, style, attributes, children } = props;
    const attrs = [
      id ? `id="${id}"` : '',
      className ? `class="${className}"` : '',
      style ? `style="${style}"` : '',
      ...Object.entries(attributes || {}).map(([key, value]) => `${key}="${value}"`)
    ].filter(Boolean).join(' ');

    const innerHtml = children ? children.map(CreateElement.create).join('') : '';
    return `<${tag} ${attrs}>${innerHtml}</${tag}>`;
  }
}


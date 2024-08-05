import { default as ErrorBoundary } from '../ritmin-error/error';
interface ElementProps {
  id?: string;
  className?: string;
  style?: string;
  attributes?: { [key: string]: string };
  content?: string;
}
interface HtmlElementProps extends ElementProps {
  tag: string;
  content?: string;
  children?: HtmlElementProps[];
}
class CreateElement extends ErrorBoundary {
  public static create(
    tag: string,
    { id, className, style, attributes, content }: ElementProps,
    children?: HtmlElementProps[],
  ): string {
    // بناء قائمة السمات للعنصر
    const attrs = [
      id ? `id="${id}"` : '',
      className ? `class="${className}"` : '',
      style ? `style="${style}"` : '',
      ...Object.entries(attributes || {}).map(
        ([key, value]) => `${key}="${value}"`,
      ),
    ]
      .filter(Boolean)
      .join(' ');

    // بناء المحتوى الداخلي للعنصر
    const innerHtml =
      content ||
      (children
        ? children
            .map((child) =>
              CreateElement.create(child.tag, child, child.children),
            )
            .join('')
        : '');
    return `<${tag} ${attrs}>${innerHtml}</${tag}>`;
  }

  public static revise(
    tag: string,
    props: ElementProps,
    children?: HtmlElementProps[],
  ) {
    const dom = CreateElement.create(tag, props, children);
    document.body.innerHTML += dom;
  }

  public static update(id: string, style: { [key: string]: string }) {
    const element = document.getElementById(id);
    if (element) {
      Object.assign(element.style, style);
    } else {
      console.error(`Element with id ${id} not found.`);
    }
  }
}
export default CreateElement;

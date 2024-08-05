import { default as ErrorBoundary } from '../ritmin-error/error';
interface ElementProps {
  id?: string;
  className?: string;
  style?: string;
  attributes?: {
    [key: string]: string;
  };
  content?: string;
}
interface HtmlElementProps extends ElementProps {
  tag: string;
  content?: string;
  children?: HtmlElementProps[];
}
declare class CreateElement extends ErrorBoundary {
  static create(
    tag: string,
    { id, className, style, attributes, content }: ElementProps,
    children?: HtmlElementProps[],
  ): string;
  static revise(
    tag: string,
    props: ElementProps,
    children?: HtmlElementProps[],
  ): void;
  static update(
    id: string,
    style: {
      [key: string]: string;
    },
  ): void;
}
export default CreateElement;

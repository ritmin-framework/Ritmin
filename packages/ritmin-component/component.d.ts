import { default as ErrorBoundary } from '../ritmin-error/error';
interface ElementProps {
  id?: string;
  className?: string;
  style?: string;
  attributes?: {
    [key: string]: string;
  };
}
interface HtmlElementProps extends ElementProps {
  tag: string;
  children?: HtmlElementProps[];
}
export default class CreateElement extends ErrorBoundary {
  static create(props: HtmlElementProps): string;
}
export {};

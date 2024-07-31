export default class Dom {
  revise(
    elementType: 'div' | 'p' | 'span' | 'a' | 'button' | 'img',
    type: {
      id: string;
      className: string;
      content?: string;
      src?: string;
    },
    elementAll?:
      | {
          type: 'div' | 'p' | 'span' | 'a' | 'button' | 'img';
          id: string;
          className: string;
          content?: string;
          src?: string;
        }
      | Array<{
          type: 'div' | 'p' | 'span' | 'a' | 'button' | 'img';
          id: string;
          className: string;
          content?: string;
          src?: string;
        }>,
  ): void;
  itemUpdate(
    id: string,
    style: {
      [key: string]: string;
    },
  ): void;
}

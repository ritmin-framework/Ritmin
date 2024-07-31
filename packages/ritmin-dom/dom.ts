// Provides methods to create, modify, or delete HTML elements
export default class Dom {
  // Creates and adds HTML elements to the document
  // @param elementType - The type of element (e.g., 'div', 'p', 'img', etc.)
  // @param type - Basic details of the element
  // @param type.id - The id of the element
  // @param type.className - The class name of the element
  // @param type.content - The content of the element (optional)
  // @param type.src - The source of the image (if element is 'img') (optional)
  // @param elementAll - Additional elements to add to the document (optional)
  // @param elementAll.type - The type of additional element (e.g., 'div', 'p', 'img', etc.)
  // @param elementAll.id - The id of the additional element
  // @param elementAll.className - The class name of the additional element
  // @param elementAll.content - The content of the additional element (optional)
  // @param elementAll.src - The source of the image (if additional element is 'img') (optional)
  public revise(
    elementType: 'div' | 'p' | 'span' | 'a' | 'button' | 'img',
    type: { id: string; className: string; content?: string; src?: string },
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
  ) {
    const validElementTypes: Array<
      'div' | 'p' | 'span' | 'a' | 'button' | 'img'
    > = ['div', 'p', 'span', 'a', 'button', 'img'];

    // Validate the element type
    if (!validElementTypes.includes(elementType)) {
      console.error(`Invalid element type: ${elementType}`);
      return;
    }

    // Validate id and className
    if (
      typeof type.id !== 'string' ||
      type.id.trim() === '' ||
      typeof type.className !== 'string'
    ) {
      console.error(`Invalid id or className: ${type.id}, ${type.className}`);
      return;
    }

    // Create the basic element
    let element = '';
    if (elementType === 'img') {
      element = `<${elementType} id="${type.id}" class="${type.className}" src="${type.src || ''}" alt="${type.content || ''}">`;
    } else {
      element = `<${elementType} id="${type.id}" class="${type.className}">${type.content || ''}</${elementType}>`;
    }

    const fragment = document.createDocumentFragment();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = element;
    const firstChild = tempDiv.firstChild;
    if (firstChild) {
      fragment.appendChild(firstChild);
    }

    // Add additional elements
    if (elementAll) {
      if (Array.isArray(elementAll)) {
        elementAll.forEach((item) => {
          if (
            validElementTypes.includes(item.type) &&
            typeof item.id === 'string' &&
            item.id.trim() !== '' &&
            typeof item.className === 'string'
          ) {
            let additionalElement = '';
            if (item.type === 'img') {
              additionalElement = `<${item.type} id="${item.id}" class="${item.className}" src="${item.src || ''}" alt="${item.content || ''}">`;
            } else {
              additionalElement = `<${item.type} id="${item.id}" class="${item.className}">${item.content || ''}</${item.type}>`;
            }
            tempDiv.innerHTML = additionalElement;
            const additionalChild = tempDiv.firstChild;
            if (additionalChild) {
              (fragment.firstChild as HTMLElement).innerHTML +=
                additionalElement;
            }
          } else {
            console.error(
              `Invalid additional element: ${item.type}, ${item.id}, ${item.className}`,
            );
          }
        });
      } else {
        const item = elementAll;
        if (
          validElementTypes.includes(item.type) &&
          typeof item.id === 'string' &&
          item.id.trim() !== '' &&
          typeof item.className === 'string'
        ) {
          let additionalElement = '';
          if (item.type === 'img') {
            additionalElement = `<${item.type} id="${item.id}" class="${item.className}" src="${item.src || ''}" alt="${item.content || ''}">`;
          } else {
            additionalElement = `<${item.type} id="${item.id}" class="${item.className}">${item.content || ''}</${item.type}>`;
          }
          tempDiv.innerHTML = additionalElement;
          const additionalChild = tempDiv.firstChild;
          if (additionalChild) {
            (fragment.firstChild as HTMLElement).innerHTML += additionalElement;
          }
        } else {
          console.error(
            `Invalid additional element: ${item.type}, ${item.id}, ${item.className}`,
          );
        }
      }
    }

    // Append the element to the document
    document.body.appendChild(fragment);
  }

  // Updates the style of the specified element by id
  // @param id - The id of the element to update
  // @param style - An object containing CSS properties to apply to the element
  // @param style.key - The name of the CSS property
  // @param style.value - The value of the CSS property
  public itemUpdate(id: string, style: { [key: string]: string }) {
    const element = document.getElementById(id);
    if (element) {
      Object.assign(element.style, style);
    } else {
      console.error(`Element with id ${id} not found.`);
    }
  }
}

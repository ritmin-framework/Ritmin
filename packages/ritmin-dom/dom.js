export default class Dom {
  revise(elementType, type, elementAll) {
    const validElementTypes = ['div', 'p', 'span', 'a', 'button', 'img'];
    if (!validElementTypes.includes(elementType)) {
      console.error(`Invalid element type: ${elementType}`);
      return;
    }
    if (
      typeof type.id !== 'string' ||
      type.id.trim() === '' ||
      typeof type.className !== 'string'
    ) {
      console.error(`Invalid id or className: ${type.id}, ${type.className}`);
      return;
    }
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
              fragment.firstChild.innerHTML += additionalElement;
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
            fragment.firstChild.innerHTML += additionalElement;
          }
        } else {
          console.error(
            `Invalid additional element: ${item.type}, ${item.id}, ${item.className}`,
          );
        }
      }
    }
    document.body.appendChild(fragment);
  }
  itemUpdate(id, style) {
    const element = document.getElementById(id);
    if (element) {
      Object.assign(element.style, style);
    } else {
      console.error(`Element with id ${id} not found.`);
    }
  }
}
//# sourceMappingURL=dom.js.map

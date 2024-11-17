const getInnerText = (element: HTMLElement, excludeId?: string): string => {
  let text = "";

  element.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) {
      text += child.textContent || "";
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      const childElement = child as HTMLElement;

      if (childElement.id !== excludeId) {
        text += getInnerText(childElement, excludeId);
      }
    }
  });

  return text.trim();
};

export default getInnerText;

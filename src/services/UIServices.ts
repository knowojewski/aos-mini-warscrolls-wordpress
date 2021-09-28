export const scrollToElement = (
  element: HTMLElement,
  offset: number,
  delay: number = 0
): void => {
  setTimeout(() => {
    const elementPosition = element.offsetTop;

    window.scroll(0, elementPosition - offset);
  }, delay);
};

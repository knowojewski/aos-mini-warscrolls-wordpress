export const scrollToElement = (
  scrollContainer: HTMLElement,
  element: HTMLElement,
  offset: number,
  delay: number = 0
): void => {
  setTimeout(() => {
    const elementPosition = element.offsetTop;

    scrollContainer.scroll(0, elementPosition - offset);
  }, delay);
};

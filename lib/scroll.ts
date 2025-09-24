export const getScrollPosition = (url: string): number => {
  const position = sessionStorage.getItem(url);
  return position ? parseInt(position, 10) : 0;
};

export const setScrollPosition = (url: string, position: number): void => {
  sessionStorage.setItem(url, position.toString());
};

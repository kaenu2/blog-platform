export const pageCount = (items: number, visibleItems: number): number => {
  return Math.floor(items / visibleItems);
};

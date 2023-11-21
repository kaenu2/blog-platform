export const hasTagName = (name: string, arr: string[]) => {
  if (arr.filter((el) => el === name).length) return;
  if (!name.trim().length) return;
  return name;
};

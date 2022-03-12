export const handlebarsHelpers = {
  inc: (value: number) => value + 1,
  isFemale: (name: string) => ((name[name.length - 1] === 'a')),
};

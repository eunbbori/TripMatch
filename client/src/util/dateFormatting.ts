export const dateFormat = (date: string) => {
  const korDate = new Date(date);
  const year = korDate.getFullYear();
  const month = ("0" + (1 + korDate.getMonth())).slice(-2);
  const day = ("0" + korDate.getDate()).slice(-2);
  return `${year}-${month}-${day}`;
};

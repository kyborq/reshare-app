import { format } from "date-fns";

export const toReadableDate = (date: string) => {
  const currentDate = new Date(date);
  const formattedDate = format(currentDate, "dd.MM.yyyy");
  return formattedDate;
};

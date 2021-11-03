import moment from "moment";

export const getDateInfo = (date, months, endOfStr) => {
  const day = moment(date).date();
  const month = months[moment(date).month()];
  const year = moment(date).year();
  return `${day} ${month} ${year} ${endOfStr}`;
};

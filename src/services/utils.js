export const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomTime = () => {
  const hours = getRandomInt(0, 23);
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const minutes = getRandomInt(0, 59);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formattedHours}:${formattedMinutes}`;
};

export const normalizeArray = (array) =>
  array.reduce((result, current) => {
    // @ts-ignore
    result[current.id] = current;
    return result;
  }, {});

export const normalizeTicketsArray = (array) =>
  array.reduce((result, current) => {
    result[`${current.row}_${current.seat}`] = current;
    return result;
  }, {});

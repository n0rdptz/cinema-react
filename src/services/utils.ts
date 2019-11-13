export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
};

export const getRandomTime = () => {
  const hours = getRandomInt(0, 23);
  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  const minutes = getRandomInt(0, 59);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${formattedHours}:${formattedMinutes}`;
};

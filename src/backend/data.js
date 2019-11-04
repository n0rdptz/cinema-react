import faker from 'faker';
import { capitalize, getRandomInt, getRandomTime } from '../services/utils';

const FILMS_COUNT = 20;
const MIN_FILM_SEANCES = 1;
const MAX_FILM_SEANCES = 3;
const MIN_SEATS_IN_ROW = 8;
const MAX_SEATS_IN_ROW = 10;
const MIN_ROWS_IN_HALL = 8;
const MAX_ROWS_IN_HALL = 10;
const TICKET_PRICE = 20;

const films = [];
const seances = [];
const tickets = [];

function generateFilms() {
  for (let i = 0; i< FILMS_COUNT; i++) {
    films.push({
      id: i + 1,
      title: capitalize(faker.lorem.word()),
      description: faker.lorem.paragraph(),
      cover: faker.image.nature()
    });
  }
}

function generateSeances() {
  let seanceId = 1;
  films.forEach(({ id: filmId }) => {
    const seancesCount = getRandomInt(MIN_FILM_SEANCES, MAX_FILM_SEANCES);
    for (let i = 0; i < seancesCount; i++) {
      seances.push({
        id: seanceId++,
        filmId,
        time: getRandomTime(),
        hallNumber: getRandomInt(1, 9),
      })
    }
  });
}

function generateTickets() {
  let ticketId = 1;
  seances.forEach(({ id: seanceId }) => {
    const seatsCount = getRandomInt(MIN_SEATS_IN_ROW, MAX_SEATS_IN_ROW);
    const rowsCount = getRandomInt(MIN_ROWS_IN_HALL, MAX_ROWS_IN_HALL);

    for (let row = 1; row <= rowsCount; row++) {
      for (let seat = 1; seat <= seatsCount; seat++) {
        tickets.push({
          id: ticketId++,
          seanceId,
          price: TICKET_PRICE,
          row,
          seat,
          taken: !!getRandomInt(0, 1)
        });
      }
    }
  });
}

generateFilms();
generateSeances();
generateTickets();

export const getFilms = () => {
  return Promise.resolve(films);
};

export const getSeances = () => {
  return Promise.resolve(seances);
};

export const getSeancesByFilmId = (filmId) => {
  return Promise.resolve(seances.filter((seance) => seance.filmId === filmId));
};

export const getTickets = () => {
  return Promise.resolve(tickets);
};

export const getTicketsBySeanceId = (seanceId) => {
  return Promise.resolve(tickets.filter((ticket) => ticket.seanceId === seanceId));
};

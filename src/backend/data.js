import faker from 'faker';
import {capitalize, getRandomInt, getRandomTime} from '../services/utils';

const FILMS_COUNT = 20;
const MIN_FILM_SEANCES = 1;
const MAX_FILM_SEANCES = 3;
const MIN_SEATS_IN_ROW = 10;
const MAX_SEATS_IN_ROW = 10;
const MIN_ROWS_IN_HALL = 10;
const MAX_ROWS_IN_HALL = 10;
const TICKET_PRICE = 20;

const REQUEST_DELAY = 500;

const films = [];
const seances = [];
const tickets = [];

function generateFilms() {
  for (let i = 0; i < FILMS_COUNT; i++) {
    films.push({
      id: i + 1,
      title: capitalize(faker.lorem.word()),
      description: faker.lorem.paragraph(),
      cover: faker.random.image()
    });
  }
}

function generateSeances() {
  let seanceId = 1;
  films.forEach(({id: filmId}) => {
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
  seances.forEach(({id: seanceId}) => {
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
          reserved: !!getRandomInt(0, 1)
        });
      }
    }
  });
}

generateFilms();
generateSeances();
generateTickets();

export const getFilms = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(films), REQUEST_DELAY);
  });

export const getSeances = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(seances), REQUEST_DELAY);
  });

export const getSeanceById = (id) => {
  const seancesById = seances.find((seance) => seance.id === id);
  const film = films.find((film) => film.id === seancesById.filmId);
  const ticketsBySeanceId = tickets.filter((ticket) => ticket.seanceId === id);
  return new Promise((resolve) => {
    setTimeout(() => resolve({
        filmTitle: film.title,
        filmDescription: film.description,
        filmCover: film.cover,
        ...seancesById,
        tickets: ticketsBySeanceId
      }
    ), REQUEST_DELAY);
  });
};

export const getSeancesByFilmId = (filmId) => {
  const seancesByFilmId = seances.filter((seance) => seance.filmId === filmId);
  return new Promise((resolve) => {
    setTimeout(() => resolve(seancesByFilmId), REQUEST_DELAY);
  });
};

export const getTickets = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(tickets), REQUEST_DELAY);
  });

export const getTicketsBySeanceId = (seanceId) => {
  const ticketsBySeanceId = tickets.filter((ticket) => ticket.seanceId === seanceId);
  return new Promise((resolve) => {
    setTimeout(() => resolve(ticketsBySeanceId), REQUEST_DELAY);
  });
};

function reserveTickets(ids) {
  tickets.forEach((ticket) => {
    if (ids.includes(ticket.id)) {
      ticket.reserved = true;
    }
  });
}

export const reserveTicketsById = (seanceId, ticketIds) => {
  reserveTickets(ticketIds);
  return tickets.filter((ticket) => ticket.seanceId === seanceId);
};

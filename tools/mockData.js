const players = [
  {
    id: 1,
    name: "Virat Kohali",
    state: "Punjab",
    coachId: 1,
    game: "Cricket"
  },
  {
    id: 2,
    name: "M S Dhoni",
    state: "Jharkhandh",
    coachId: 1,
    game: "Cricket"
  },
  {
    id: 3,
    name: "Kapil Dev",
    state: "Utter Pardesh",
    coachId: 1,
    game: "Cricket"
  },
  {
    id: 4,
    name: "Sachin Tendualkar",
    state: "Mumbai",
    coachId: 1,
    game: "Cricket"
  },
  {
    id: 5,
    name: "Yuvraj Singh",
    state: "Haryana",
    coachId: 1,
    game: "Cricket"
  },
  {
    id: 6,
    name: "Harbhajan Singh",
    state: "Himachal Pardesh",
    coachId: 1,
    game: "Cricket"
  },
  {
    id: 7,
    name: "Messy",
    state: "Bengal",
    coachId: 2,
    game: "Football"
  },
  {
    id: 8,
    name: "Srikanatha",
    state: "Banglore",
    coachId: 3,
    game: "Badminton"
  },
  {
    id: 9,
    name: "Rodger Fedrer",
    state: "Madhya Pardesh",
    coachId: 2,
    game: "Tennis"
  },
  {
    id: 10,
    name: "Bhanu Partap",
    state: "andhra Pardesh",
    coachId: 3,
    game: "Basketball"
  }
];

const coaches = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newPlayer = {
  id: null,
  name: "",
  coachId: null,
  game: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newPlayer,
  players,
  coaches
};

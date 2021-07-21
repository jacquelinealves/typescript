/**
 * TYPE ALIASES WITH INTERSECTION
 */

type accountInfo = {
  id: number;
  name: string;
  email?: string; // optional
};

const account: accountInfo = {
  id: 123,
  name: "Jacqueline",
};

type charInfo = {
  nickname: string;
  level: number;
};

const char: charInfo = {
  nickname: "omalleys",
  level: 100,
};

type playerInfo = accountInfo & charInfo; // intersection

const player: playerInfo = {
  id: 123,
  name: "Jacqueline",
  nickname: "Omalleys",
  level: 100,
};

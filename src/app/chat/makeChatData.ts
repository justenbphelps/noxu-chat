import { faker } from "@faker-js/faker";

// All types are based on given design and not real schema
export type User = {
  id: number;
  name: string;
  avatar: string;
};

export type Account = {
  id: number;
  name: string;
  industry: string;
  city: string;
  state: string;
  segment: string;
  ownerId: number;
};

export type Query = {
  id: number;
  text: string;
  user: User;
};

const newUser = (id: number): User => {
  return {
    id,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  };
};

const newAccount = (id: number): Account => {
  return {
    id: faker.number.int({ max: 500 }),
    name: faker.company.name(),
    industry: faker.lorem.word(),
    city: faker.location.city(),
    state: faker.location.state(),
    segment: faker.lorem.word(),
    ownerId: faker.number.int({ max: 10 }),
  };
};

const newQuery = (id: number): Query => {
  return {
    id,
    text: faker.helpers.shuffle([
      "List my top 10 accounts",
      "Show me my top 10 accounts",
      "What are my top 10 accounts",
      "List my top 10 accounts by revenue",
      "Show me my top 10 accounts by revenue",
      "What are my top 10 accounts by revenue",
      "List my top 10 accounts by industry",
      "Show me my top 10 accounts by industry",
      "What are my top 10 accounts by industry",
      "List my top 10 accounts by city",
      "Show me my top 10 accounts by city",
      "What are my top 10 accounts by city",
      "List my top 10 accounts by state",
      "Show me my top 10 accounts by state",
      "What are my top 10 accounts by state",
      "List my top 10 accounts by segment",
      "Show me my top 10 accounts by segment",
      "What are my top 10 accounts by segment",
    ])[0],
    user: newUser(faker.number.int()),
  };
};

export function makeAccountsData(): Account[] {
  return Array.from({ length: 10 }, (_, i) => newAccount(i));
}

export function makeQueriesData(): Query[] {
  return Array.from({ length: 5 }, (_, i) => newQuery(i));
}

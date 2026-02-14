import { faker } from "@faker-js/faker";

export enum TimeDistribution {
  LINEAR,
}

type GenFn<TReturn, TExtraArgs extends Array<unknown> | never = never> = (
  n: number,
  ...args: TExtraArgs
) => IterableIterator<TReturn>;

export const genUUIDv4: GenFn<string> = function* () {
  const uuidv4Options: Parameters<typeof faker.string.uuid>[0] = { version: 4 };
  yield faker.string.uuid(uuidv4Options);
};

export const genUUIDv7: GenFn<string, [number, number]> = function* (
  n: number,
  from: number,
  to: number,
) {
  const epochStep = Math.floor((to - from) / n);
  const uuidv7Options: Parameters<typeof faker.string.uuid>[0] = {
    version: 7,
  };

  if (epochStep <= 0) {
    throw new Error('"to" must be greater than "from" * "n"');
  }

  for (let i = 0; i < n; i++) {
    uuidv7Options.refDate = to + i * epochStep;
    yield faker.string.uuid(uuidv7Options);
  }
};

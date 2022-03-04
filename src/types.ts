type Scientific = `${number} x 10^${number}`;
type Engineering = `${number}e-${number}`;
type E = `${number}e-${string}${number}`;

type Notation = Scientific | Engineering | E;

// type ReversedArray<T, K> = (arr: Array<T>) => ReversedArray<T[]>;

// convert number to notation
type NumberTo<T extends Notation> = (x: number) => T;

// type guards for string values
type Is<T extends Notation> = (x: string | Notation) => x is T;

// convert string or notation to number or notation
type StringTo<T extends Notation | number> = (x: string | Notation) => T;

const isScientific: Is<Scientific> = (x: string): x is Scientific => {
  const candidate = x.match("x 10^");

  if (!candidate) return false;

  const numArr = x.split("x 10^");

  if (numArr.length < 2) return false;

  const arr0 = numArr[0].trim();
  const arr1 = numArr[0].trim();

  const numericCharcodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

  return false;
};

type Predicate = <T extends Function ? infer T>(x: T) => boolean;

const until = (predicate: (x: T) => boolean) => {

}

until(x => x == 1);
// const isE: Is<E> = (x: string): x is E

import { ITransactions } from "./entities";

export function reduce(arrayTransaction: Array<number>): number {
  const result = arrayTransaction.reduce((acc, currentValue) => {
    return (acc += currentValue);
  }, 0);

  return result;
}

export function round(value: number): number {
  return Math.round(value * 100) / 100;
}

export function calculateRange(
  data: ITransactions[],
  rowsPerPage: number
): Array<number> {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);

  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
}

export function transactionsDataData(
  data: ITransactions[],
  page: number,
  rowsPerPage: number
): ITransactions[] {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
}

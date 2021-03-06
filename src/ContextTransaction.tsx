import React, { ReactNode } from "react";
import { useReducer } from "react";
import { data } from "./data";
import { IAction, ITransactions } from "./entities";

interface MyProviderProps {
  children: ReactNode;
}

function transactionReducer(
  state: ITransactions[],
  action: IAction
): ITransactions[] {
  switch (action.type) {
    case "add":
      return [...state, action.transaction];
    case "delete":
      return state.filter(
        (transaction) => transaction.id !== action.transaction.id
      );
    default:
      return state;
  }
}
const initialTransations = data.transactions;

export const MyContext = React.createContext<{
  state: ITransactions[];
  dispatch: React.Dispatch<IAction>;
}>({ state: initialTransations, dispatch: () => {} });

export function MyProvider(props: MyProviderProps) {
  const [state, dispatch] = useReducer(transactionReducer, initialTransations);
  const value = { state, dispatch };
  return (
    <MyContext.Provider value={value}>{props.children}</MyContext.Provider>
  );
}

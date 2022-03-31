import styled from "styled-components";
import { data } from "../../data";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useReducer, useState } from "react";
import { MyContext } from "../../ContextTransaction";

const CustomMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const CustomTable = styled.table`
  border-radius: 5px;
  width: 1000px;
  height: 400px;
  position: relative;
`;

const CustomHead = styled.thead`
  background-color: rgb(179, 183, 205);
  height: 50px;
`;

const CustomBody = styled.tbody`
  background-color: rgb(237, 238, 241);
  height: 100px;
  overflow: hidden;
`;

const CustomButton = styled.button`
  background-color: rgb(179, 183, 205);
  padding: 5px;
  border: none;
  border-radius: 2px;
  padding-right: 15px;
  padding-left: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }
`;

interface IAction {
  type: string;
  transaction: {
    id?: string;
    datetime?: string;
    amount?: string;
    type?: string;
    mode?: string;
    commentaire?: string | null;
  };
}

interface ITransactions {
  id: string;
  datetime: string;
  amount: string;
  type: string;
  mode?: string;
  commentaire?: string | null;
}

export function todoReducer(
  state: ITransactions[],
  action: IAction
): ITransactions[] {
  console.log(action.transaction.id);
  console.log(state);
  switch (action.type) {
    case "add":
      return [...state, action.transaction] as ITransactions[];
    case "delete":
      console.log(action.transaction.id);
      return state.filter(
        (transaction) => transaction.id !== action.transaction.id
      );
    default:
      return state;
  }
}

export const initialTransations = data.transactions;

function Transactions() {
  const navigate = useNavigate();
  //const { state } = useLocation();

  const { state, dispatch } = useContext(MyContext);
  console.log(state);
  // dispatchTodo({ type: "add", todo: inputValue });
  return (
    <CustomMain>
      <CustomTable>
        <CustomHead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Mode</th>
            <th>Montant (€)</th>
            <th>Action</th>
          </tr>
        </CustomHead>
        <CustomBody>
          {state.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                {new Date(transaction.datetime!).toLocaleDateString("fr")}
              </td>
              <td>{transaction.type}</td>
              <td>{transaction.mode}</td>
              <td>{transaction.amount}</td>
              <td>
                <CustomButton
                  onClick={() => navigate(`/transactions/${transaction.id}`)}
                >
                  Détails
                </CustomButton>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={5}>pagination</td>
          </tr>
        </CustomBody>
      </CustomTable>
    </CustomMain>
  );
}

export default Transactions;

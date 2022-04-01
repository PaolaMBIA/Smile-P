import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../../ContextTransaction";
import { reduce, round } from "../../utils";

export const CustomMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const CustomHead = styled.thead`
  background-color: rgb(179, 183, 205);
  height: 50px;
`;
const CustomTable = styled.table`
  border-radius: 5px;
  width: 1000px;
  height: 100px;
  position: relative;
`;

const CustomBody = styled.tbody`
  background-color: rgb(237, 238, 241);
  height: 50px;
  overflow: hidden;
`;

function Summary() {
  const { state } = useContext(MyContext);
  const debits = state
    .filter((transaction) => transaction.type === "débit")
    .map((transaction) => parseFloat(transaction.amount!));

  const credits = state
    .filter((transaction) => transaction.type === "crédit")
    .map((transaction) => parseFloat(transaction.amount!));

  return (
    <CustomMain>
      <CustomTable>
        <CustomHead>
          <tr>
            <th>Débits (€)</th>
            <th>Crédits (€)</th>
            <th>Total (€)</th>
          </tr>
        </CustomHead>
        <CustomBody>
          <tr>
            <td>{reduce(debits)}</td>
            <td>{round(reduce(credits))}</td>
            <td>{round(reduce([...debits, ...credits]))}</td>
          </tr>
        </CustomBody>
      </CustomTable>
    </CustomMain>
  );
}

export default Summary;

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { MyContext } from "../../ContextTransaction";
import AddTransaction from "./AddTransaction";
import Pagination from "./Pagination";
import useTable from "../../hooks/useTable";

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

const CustomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function Transactions() {
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const { state } = useContext(MyContext);
  const { transactionsData, range } = useTable(state, page, 5);

  return (
    <CustomMain>
      {!isEditable ? (
        <CustomWrapper>
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
              {transactionsData.map((transaction) => (
                <tr key={transaction.id}>
                  <td>
                    {new Date(transaction.datetime!).toLocaleDateString("fr")}
                  </td>
                  <td>{transaction.type}</td>
                  <td>{transaction.mode}</td>
                  <td>{transaction.amount}</td>
                  <td>
                    <CustomButton
                      onClick={() =>
                        navigate(`/transactions/${transaction.id}`)
                      }
                    >
                      Détails
                    </CustomButton>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={5}>
                  <CustomButton onClick={() => setIsEditable(true)}>
                    Ajouter une nouvelle transaction
                  </CustomButton>
                </td>
              </tr>
            </CustomBody>
          </CustomTable>
          <Pagination
            range={range}
            setPage={setPage}
            page={page}
            transactionsData={transactionsData}
          />
        </CustomWrapper>
      ) : (
        <AddTransaction setIsEditable={setIsEditable} />
      )}
    </CustomMain>
  );
}

export default Transactions;

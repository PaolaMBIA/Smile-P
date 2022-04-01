import { useEffect } from "react";
import styled from "styled-components";
import { ITransactions } from "../../entities";
import "./Pagination.css";

const CustomButtonBlock = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

interface PaginationProps {
  range: Array<number>;
  setPage: (value: number) => void;
  page: number;
  transactionsData: ITransactions[];
}

const Pagination = ({
  range,
  setPage,
  page,
  transactionsData,
}: PaginationProps) => {
  useEffect(() => {
    if (transactionsData.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [transactionsData, page, setPage]);
  return (
    <CustomButtonBlock>
      {range.map((element, index) => (
        <button
          key={index}
          className={`${page === element ? "activeButton " : "inactiveButton"}`}
          onClick={() => setPage(element)}
        >
          {element}
        </button>
      ))}
    </CustomButtonBlock>
  );
};

export default Pagination;

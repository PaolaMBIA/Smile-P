import { useState, useEffect, useContext } from "react";
import { ITransactions, MyContext } from "../ContextTransaction";
import { calculateRange, transactionsDataData } from "../utils";

// ...

const useTable = (data: ITransactions[], page: number, rowsPerPage: number) => {
  const { state } = useContext(MyContext);

  const [tableRange, setTableRange] = useState<Array<number>>([]);
  const [transactionsData, settransactionsData] =
    useState<ITransactions[]>(state);

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage);
    setTableRange([...range]);

    const transactionsData = transactionsDataData(data, page, rowsPerPage);
    settransactionsData([...transactionsData]);
  }, [data, setTableRange, page, settransactionsData]);

  return { transactionsData, range: tableRange };
};

export default useTable;

import { Route, Routes } from "react-router-dom";
import Summary from "./pages/summary";
import Transactions from "./pages/transaction";
import TransactionDetails from "./pages/transaction/TransactionDetails";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Transactions />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/transactions/:id" element={<TransactionDetails />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default AppRouter;

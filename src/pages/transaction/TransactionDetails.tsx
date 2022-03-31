import { data } from "../../data";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const CustomImg = styled.img`
  width: 70px;
  cursor: pointer;
`;

function TransactionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const transaction = data.transactions.find(
    (transaction) => transaction.id === id
  )!;
  return (
    <div>
      <CustomImg
        src="https://img.icons8.com/ios/50/000000/left.png"
        alt="retour sur la liste des transactions"
        onClick={() => navigate("/transactions")}
      />
      <div>
        <p>Date : {new Date(transaction.datetime).toLocaleDateString("fr")}</p>
        <p>Type : {transaction.type}</p>
        <p>{transaction.mode && `Mode : ${transaction.mode}`}</p>
        <p>Montant : {transaction.amount}</p>
        <p>
          {transaction.commentaire &&
            `Commentaire : ${transaction.commentaire}`}
        </p>
      </div>
      <button>Supprimer</button>
    </div>
  );
}

export default TransactionDetails;

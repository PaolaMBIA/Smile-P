import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { MyContext } from "../../ContextTransaction";

const CustomImg = styled.img`
  width: 70px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
`;
const CustomDiv = styled.div`
  width: 1100px;
  position: relative;
`;
const CustomDetails = styled.div`
  padding-top: 60px;
  padding-bottom: 40px;
`;
const CustomButton = styled.button`
  background-color: #f9e34c;
  border: none;
  border-radius: 6px;
  padding: 15px;
  padding-right: 25px;
  padding-left: 25px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }
`;

function TransactionDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(MyContext);
  const transaction = state.find((transaction) => transaction.id === id)!;

  const handleDelete = () => {
    dispatch({ type: "delete", transaction: { id: id! } });
    navigate("/transactions");
  };

  return (
    <CustomDiv>
      <CustomImg
        src="https://img.icons8.com/ios/50/000000/left.png"
        alt="retour sur la liste des transactions"
        onClick={() => navigate("/transactions")}
      />
      <CustomDetails>
        <p>Date : {new Date(transaction.datetime!).toLocaleDateString("fr")}</p>
        <p>Type : {transaction.type}</p>
        <p>{transaction.mode && `Mode : ${transaction.mode}`}</p>
        <p>Montant : {transaction.amount}</p>
        <p>
          {transaction.commentaire &&
            `Commentaire : ${transaction.commentaire}`}
        </p>
      </CustomDetails>
      <CustomButton onClick={handleDelete}>Supprimer</CustomButton>
    </CustomDiv>
  );
}

export default TransactionDetails;

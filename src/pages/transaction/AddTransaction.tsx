import { FormEvent, useContext, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";
import { fr } from "date-fns/locale";
import { MyContext } from "../../ContextTransaction";
import styled from "styled-components";

const CustomImg = styled.img`
  width: 70px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const CustomFormWrapper = styled.div`
  width: 1100px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const CustomForm = styled.form`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 30px;
  align-items: flex-start;
`;

const CustomBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  align-self: center;

  &:hover {
    background-color: grey;
  }
`;
interface AddTransactionProps {
  setIsEditable: (value: boolean) => void;
}
function AddTransaction({ setIsEditable }: AddTransactionProps) {
  const [date, setDate] = useState<Date | null>(new Date());
  const [type, setType] = useState<string>("crédit");
  const [mode, setMode] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const { dispatch } = useContext(MyContext);

  const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({
      type: "add",
      transaction: {
        id: Date.now().toString(36) + Math.random().toString(36),
        datetime: date?.toDateString(),
        type,
        mode,
        amount,
      },
    });
    setIsEditable(false);
  };

  return (
    <CustomFormWrapper>
      <CustomImg
        src="https://img.icons8.com/ios/50/000000/left.png"
        alt="retour sur la liste des transactions"
        onClick={() => setIsEditable(false)}
      />
      <CustomForm onSubmit={HandleSubmit}>
        <CustomBlock>
          <label>Date :</label>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={fr}>
            <DatePicker
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </CustomBlock>
        <CustomBlock>
          <label htmlFor="type">Type :</label>
          <select
            required
            value={type}
            onChange={(event) => setType(event.target.value)}
            id="type"
          >
            <option value="crédit">crédits</option>
            <option value="débit">débits</option>
          </select>
        </CustomBlock>
        <CustomBlock>
          <label htmlFor="mode">Mode :</label>
          <input
            id="mode"
            value={mode}
            onChange={(event) => setMode(event.target.value)}
          />
        </CustomBlock>
        <CustomBlock>
          <label htmlFor="type">Montant :</label>
          <input
            required
            id="type"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </CustomBlock>
        <CustomButton type="submit">Ajouter</CustomButton>
      </CustomForm>
    </CustomFormWrapper>
  );
}

export default AddTransaction;

import { FormEvent, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {
  DayValue,
  DayRange,
  Day,
} from "react-modern-calendar-datepicker";

function AddTransaction() {
  const [date, setDate] = useState<DayValue>(null);
  const [type, setType] = useState<string>("");
  const [mode, setMode] = useState<string>("");
  const [montant, setMontant] = useState<string>("");

  const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {};

  console.log(date);

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <div>
          <label></label>
          <DatePicker value={date} onChange={setDate} />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddTransaction;

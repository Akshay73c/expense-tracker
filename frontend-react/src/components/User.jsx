import { useParams } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { useNavigate } from "react-router-dom";

export default function User() {
  const { user_id } = useParams();
  const navigate = useNavigate();

  const logout = () => {
    navigate("/Login");
  };

  return (
    <>
      <ExpenseForm user_id={user_id} />
      <ExpenseList user_id={user_id} />
      <h5>Refresh page to update list, Sorry for inconvenience!</h5>

      <button
        onClick={logout}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Logout
      </button>
    </>
  );
}

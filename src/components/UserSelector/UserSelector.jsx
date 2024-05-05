import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../slices/UserSlice";
import { useState } from "react";
import css from "./UserSelector.module.css";

function UserSelector() {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("");

  // Function to handle change of selected user in header (doesnt work atm)
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log(selectedOption);
    dispatch(
      setSelectedUser(selectedOption ? selectedOption.value : "Välj användare")
    );
  };
  
  return (
    <select className={css.select}> 
      {users.map((user) => (
        <option onChange={handleChange} key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}

export default UserSelector;

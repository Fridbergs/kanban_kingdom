import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../../slices/UserSlice"; // Justera sökvägen baserat på filstrukturen

function UserSelector() {
  const dispatch = useDispatch();
  const users = [
    { value: "Everyone", label: "Everyone" },
    { value: "Mirza", label: "Mirza" },
    { value: "Eva", label: "Eva" },
    { value: "Caroline", label: "Caroline" },
    { value: "Aleksei", label: "Aleksei" },
    { value: "Jumi", label: "Jumi" },
    { value: "Linus", label: "Linus" },
    { value: "Jason", label: "Jason" },
  ]; // Användarnamn som objekt för React Select

  const handleChange = (selectedOption) => {
    // Säkerställ att ett värde finns, annars skicka en tom sträng eller ett standardvärde
    dispatch(
      setSelectedUser(selectedOption ? selectedOption.value : "Välj användare")
    );
  };

  return (
    <Select
      options={users}
      onChange={handleChange}
      className="basic-select"
      classNamePrefix="select"
      placeholder="Välj användare" // Lägger till en placeholder i dropdown
    />
  );
}

export default UserSelector;

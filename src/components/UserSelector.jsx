import React from "react";

const UserSelector = () => {
  //renderar ut options beroende på vårt state för users
  //uppdateras automatiskt när en användare lags till/tagits bort
  return (
    <>
      <select>
        <option value="">Select user</option>
        <option value="All">Show all users</option>
        <option value="Mirza">Mirza</option>
        <option value="Eva">Eva</option>
        <option value="Caroline">Caroline</option>
        <option value="Aleksei">Aleksei</option>
        <option value="Jumi">Jumi</option>
        <option value="Linus">Linus</option>
        <option value="Jason">Jason</option>
      </select>
    </>
  );
};

export default UserSelector;

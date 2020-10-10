import React, { useState } from "react";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
    };
    console.log(username);
    setUsername("");
  };
  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => onChangeUsername(e)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;

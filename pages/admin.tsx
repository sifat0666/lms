import React, { useState } from "react";

const Admin = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="p-12 font-bold text-3xl">Admin Login</h1>
      <form className="flex gap-3 items-center justify-start">
        <label className="label" htmlFor="password">
          Password:
        </label>
        <input
          className="input"
          type="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Admin;

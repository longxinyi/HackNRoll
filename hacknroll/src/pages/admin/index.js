import React, { useState } from "react";
import EnhancedTable from "@/components/common/table";
import { createAdmin } from "@/services/adminService";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await createAdmin(username, password, name);
    if (added) {
      setUsername("");
      setPassword("");
      setName("");

      alert("Data added to Firestore DB!");
    }
  };

  return (
    <div className="ml-96">
      <h1 className="text-black">Hello World!</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-black">Username:</label>
          <input
            className="text-black"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label className="text-black">Password:</label>
          <input
            className="text-black"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="text-black">Name:</label>
          <input
            className="text-black"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button className="text-black" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

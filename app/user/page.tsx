import React from "react";

interface Users {
  id: number;
  username: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUsers: Users[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {jsonUsers.map((user) => {
          return <li key={user.id}>{user.username}</li>;
        })}
      </ul>
    </>
  );
};

export default UserPage;

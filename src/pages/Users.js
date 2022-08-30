import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Email</th>
          <th>Nama</th>
          <th>Kata sandi</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Users;

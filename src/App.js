import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const temaAwal = localStorage.getItem("tema");
  const [tema, setTema] = useState(temaAwal);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div
      style={{
        background: tema === "terang" ? "#fff" : "#000",
        color: tema === "terang" ? "#000" : "#fff",
        height: "100vh",
      }}
    >
      <button
        onClick={() => {
          const temaBaru = tema === "terang" ? "gelap" : "terang";
          setTema(temaBaru);
          localStorage.setItem("tema", temaBaru);
        }}
      >
        Ubah tema
      </button>
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
    </div>
  );
}

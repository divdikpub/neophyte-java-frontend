import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/user/${params.id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <div>
      <div>ID: {user?.id}</div>
      <div>Nama: {user?.name}</div>
      <div>Email: {user?.email}</div>
      <div>Kata sandi: {user?.password}</div>
    </div>
  );
}

export default User;

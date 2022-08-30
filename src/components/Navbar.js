import { useContext } from "react";
import Button from "./Button";
import { TemaContext } from "../App";
import { Link } from "react-router-dom";

function Navbar() {
  const { tema, setTema } = useContext(TemaContext);

  return (
    <nav>
      <Link to="/">Beranda</Link>
      <Link to="/data/users">Pengguna</Link>
      <Link to="/data/products">Produk</Link>
      <Link to="/about">Tentang</Link>
      <Button
        tindakanSaatDiklik={() =>
          setTema(tema === "terang" ? "gelap" : "terang")
        }
      >
        Ubah tema
      </Button>
    </nav>
  );
}

export default Navbar;

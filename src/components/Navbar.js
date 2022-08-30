import { useContext } from "react";
import Button from "./Button";
import { TemaContext } from "../App";

function Navbar() {
  const { tema, ubahTema } = useContext(TemaContext);

  return (
    <nav>
      <Button>Beranda</Button>
      <Button>Dokumentasi</Button>
      <Button>Tentang</Button>
      <Button
        tindakanSaatDiklik={() =>
          ubahTema(tema === "terang" ? "gelap" : "terang")
        }
      >
        Ubah tema
      </Button>
    </nav>
  );
}

export default Navbar;

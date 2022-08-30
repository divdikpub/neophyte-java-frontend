import { createContext, useState } from "react";
import Header from "./components/Header";
import Users from "./pages/Users";
import "./styles.css";

export const TemaContext = createContext();

export default function App() {
  const temaAwal = localStorage.getItem("tema");
  const [tema, setTema] = useState(temaAwal);

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      <div
        style={{
          background: tema === "terang" ? "#fff" : "#000",
          color: tema === "terang" ? "#000" : "#fff",
          height: "100vh",
        }}
      >
        <Header />
        <Users />
      </div>
    </TemaContext.Provider>
  );
}

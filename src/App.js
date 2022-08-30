import { createContext, useState } from "react";
import Header from "./components/Header";
import Users from "./pages/Users";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import User from "./pages/User";

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
        <Routes>
          <Route path="/" element={<h1>Ini halaman Beranda.</h1>} />
          <Route path="data">
            <Route path="users">
              <Route path="" element={<Users />} />
              <Route path=":id" element={<User />} />
            </Route>
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="about" element={<h1>Ini halaman Tentang.</h1>} />
        </Routes>
      </div>
    </TemaContext.Provider>
  );
}

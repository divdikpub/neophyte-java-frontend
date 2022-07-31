import { createContext, useState } from "react";
import Header from "./components/Header";
import "./style.css";

export const products = [
  {
    id: 1,
    name: "Jaket Kulit H&M",
    price: 700000,
    photo: "/img/jaket.jpg",
  },
  {
    id: 2,
    name: "MacBook Pro 2023",
    price: 30000000,
    photo: "/img/macbook.jpg",
  },
  {
    id: 2,
    name: "Kipas Angin",
    price: 200000,
    photo: "/img/kipas.jpg",
  },
];

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

export const TemaContext = createContext();

function App() {
  const [tema, setTema] = useState("terang");

  return (
    <TemaContext.Provider value={setTema}>
      <div
        style={{
          background: tema === "terang" ? "#fff" : "#000",
        }}
      >
        <Header fungsiUntukMengubahTema={setTema} />
        <div
          style={{
            display: "flex",
            gap: 16,
          }}
        >
          {products.map(function (p) {
            return (
              <div
                style={{
                  background: "#ddd",
                  padding: 16,
                  borderRadius: 16,
                }}
              >
                <img src={p.photo} />
                <h5>{p.name}</h5>
                <h6>{formatter.format(p.price)}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </TemaContext.Provider>
  );
}

export default App;

// HOOKS
// 1. State: useState()
// 2. Context: useContext()
// 3. Effect: useEffect()
// 4. Ref: useRef()

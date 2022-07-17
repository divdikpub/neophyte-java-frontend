import "./style.css";

const products = [
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

const numbers = [1, 2, 3, 4];

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
});

function App() {
  return (
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
  );
}

export default App;

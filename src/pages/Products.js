function Products() {
  const products = [
    {
      id: 1,
      name: "Kipas Angin",
      price: 200000,
    },
    {
      id: 2,
      name: "Karpet",
      price: 500000,
    },
    {
      id: 3,
      name: "Laptop",
      price: 8000000,
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <h5>
            {product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default Products;

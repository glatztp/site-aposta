const database = {
  products: [
    {
      id: 1,
      nome: "Product A",
      quantidade: 10,
      preco: 10.99
    },
    {
      id: 2,
      nome: "Product B",
      quantidade: 20,
      preco: 5.99
    },
    {
      id: 3,
      nome: "Product C",
      quantidade: 30,
      preco: 7.99
    }
  ],
  retirada: [
    {
      id: 1,
      produtoId: 1,
      quantidade: 5
    },
    {
      id: 2,
      produtoId: 2,
      quantidade: 10
    },
    {
      id: 3,
      produtoId: 3,
      quantidade: 15
    }
  ],
  totals: {
    totalProdutos: 60,
    totalValor: 249.70
  }
};
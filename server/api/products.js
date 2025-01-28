export const getProducts = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        products: [
          { id: 1, name: "Redis", price: 99 },
          { id: 2, name: "MongoDB", price: 149 },
        ],
      });
    }, 1000);
  });

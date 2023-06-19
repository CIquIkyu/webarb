export default {
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        products: './src/whatshypmic.html', 
      },
    },
  },
};

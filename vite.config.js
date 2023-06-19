export default {
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        src: resolve(__dirname,'./src/whatshypmic.html'), 
        src:resolve(__dirname,'./src/character.html'),
        src:resolve(__dirname,'./src/story.html'),
        src:resolve(__dirname,'./src/sound.html'),
        src: resolve(__dirname,'./src/BB.html'),
        src:resolve(__dirname,'./src/FP.html'),
        src: resolve(__dirname,'./src/last.html'),
        src:resolve(__dirname,'./src/M.html'),
        src: resolve(__dirname,'./src/MTC.html'),
        src: resolve(__dirname,'./src/S1Page.html'),
        src: resolve(__dirname,'./src/S2Page.html'),
        src: resolve(__dirname,'./src/Special.html'),
      },
    },
  },
};

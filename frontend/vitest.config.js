import { defineConfig } from "vite";

export default defineConfig({
   test:{
     globals:true,
     reporters:"verbose",
     environment:"jsdom",
     setupFiles:["./setupTests.js"]
   }
})
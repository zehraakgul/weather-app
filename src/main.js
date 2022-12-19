import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/ekstra-soguk.png";

const app = createApp(App);

app.use(router);

app.mount("#app");

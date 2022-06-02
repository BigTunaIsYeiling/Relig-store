import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@lottiefiles/lottie-player";

library.add(fas, fab);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.use(router);
app.mount("#app");

import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

import defaultStore from "./store/index.js";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faMugHot,
  faWeightScale,
  faEllipsis,
  faGlassWater,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faMugHot, faWeightScale, faEllipsis, faGlassWater);

const store = createStore(defaultStore);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.use(router);

app.mount("#app");

import { createApp } from 'vue';
import App from './app.vue';
import EluDesign from '../packages/elu-design';
//import {EluIcon} from "@elu-design/components"

const app = createApp(App);
app.use(EluDesign);
//app.use(EluButton)

app.mount('#app');

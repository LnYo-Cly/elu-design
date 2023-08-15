import { createApp } from 'vue';
import App from './app.vue';

import EluDesign from '@elu-design/elu-design/index';
import '@elu-design/theme-chalk/src/index.scss';

const app = createApp(App);
app.use(EluDesign);

app.mount('#app');

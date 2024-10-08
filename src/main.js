import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import { createPinia } from 'pinia'
import naive from 'naive-ui'
let app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(naive);

app.mount('#app');

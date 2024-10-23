import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

import './assets/styles/global.css'; // Import global styles here
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';
import 'primeflex/themes/primeone-light.css';
import { createPinia } from 'pinia'


// Anything Prime Vue related
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';
const app = createApp(App);

app.use(router); // Use the router

//Setup PrimeVue
app.use(PrimeVue, {
    theme: {
        preset: Lara
    }
});



//Setup Pinia
app.use(createPinia())


//Finally Mount the app
app.mount('#app');




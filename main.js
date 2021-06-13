import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/saga-orange/theme.css'
// import 'primevue/resources/primevue.css'                    //core css
// import 'primeicons/primeicons.css'                          //icons
import 'primeflex/primeflex.css';                           //primeflex

import "@/assets/css/variables.css";

import BaseCard from './components/Base/BaseCard.vue';
import BaseButton from './components/Base/BaseButton.vue';
import BaseSlider from './components/Base/BaseSlider.vue';
import BaseDialog from './components/Base/BaseDialog.vue';
import ControlButton from './components/Home/ControlButton.vue';

const app = createApp(App);

app.use(PrimeVue);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseSlider', BaseSlider);
app.component('BaseDialog', BaseDialog);
app.component('ControlButton', ControlButton);

app.use(store);
app.use(router);
app.mount('#app');

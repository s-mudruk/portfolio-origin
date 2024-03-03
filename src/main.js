import { createApp } from 'vue';
import { MotionPlugin } from '@vueuse/motion';
import './assets/bootstrap-icons/bootstrap-icons.min.css';
import './style.css';
import App from './App.vue';

createApp(App).use(MotionPlugin).mount('#app');

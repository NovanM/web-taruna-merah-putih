import {createApp} from 'vue'
import App from '../components/App.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import router from './router/index';
import './bootstrap';
// initialize components based on data attribute selectors
createApp(App).use(router).mount("#app")

onMounted(() => {
    initFlowbite();
})    


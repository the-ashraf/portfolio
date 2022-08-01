import {createApp} from 'vue'
import router from './router'
import './styles.css'
import 'vue3-carousel/dist/carousel.css';
import App from './App.vue'

createApp(App)
	.use(router)
	.mount('#app')

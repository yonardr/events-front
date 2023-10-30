import {createApp} from 'vue'
import App from './App.vue'
import components from '@/components/UI';
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})


app
    .use(store)
    .use(router)
    .mount('#app')
import "bootstrap/dist/js/bootstrap.js"
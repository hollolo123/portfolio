import { createApp } from 'vue'
import './styles/common/common.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(fas)
library.add(far)
library.add(fab)

import App from './App.vue'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use()
app.mount('#app')

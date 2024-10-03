import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faTrash, faMinus, faPlus, faTimes, faSearch, faArrowRight, faHome, faCartShopping, faArchive, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// FontAwesome autoAddCss özelliğini devre dışı bırakıyoruz
config.autoAddCss = false

// İstediğiniz ikonları kütüphaneye ekleyin
library.add(faCartPlus, faTrash, faMinus, faPlus, faTimes, faSearch, faArrowRight, faHome, faCartShopping, faArchive, faBars)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})

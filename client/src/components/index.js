import bkNav from './bk-nav/index.vue'
import bkNavSearch from './bk-nav-search/index.vue'

import bkMain from './bk-main/index.vue'

const allGlobalComponents = {
    bkNav,
    bkNavSearch,
    bkMain
}

export default {
    install(app) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })

    }
}
import MoNav from './MoNav/index.vue'

const allGlobalComponents: any = { MoNav, }

export default {
    install(app: any) {
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })

    }
}
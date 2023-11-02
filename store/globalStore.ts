import {defineStore} from 'pinia'
import {useAxiosInstance} from "~/composables/use-axios-instance.js";

export const useGlobalStore = defineStore('globalStore', {
    state: () => {
        return {
            siteInitialize: false, // page reload after running
            legalViewed: false, // first viewed closed
            breadCrumbs: [],
            siteMeta: {
                title: '',
                description: '',
                image: ''
            },
            settings: {},
            categories: [],
            suggested_search: [],
            footer_data: []
        }
    },

    actions: {
        async getGlobalData() {
            const data = await useAxiosInstance().get('/global')
            this.settings = data.settings
            this.categories = data.categories
            this.suggested_search = data.suggested_search
            this.footer_data = data.footer_data
            this.siteInitialize = true
            return data
        },
        setLegalViewed() {
            localStorage.setItem('legal', String(true))
            this.legalViewed = false
        },
        setInitialize() {
            // Legal control
            this.legalViewed = !localStorage.getItem('legal')
        },
        setSiteMeta({title, description, image}: { title: string, description: string, image: string }) {
            // Legal control
            this.siteMeta.title = title
            this.siteMeta.description = description
            this.siteMeta.image = image
        },

    }
})

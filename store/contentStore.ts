import {defineStore} from 'pinia'
import {useAxiosInstance} from "~/composables/use-axios-instance.js";

export const useContentStore = defineStore('contentStore', {
    state: () => {
        return {
            contentData: null,
            page: ''
        }
    },

    actions: {
        async content(page: string) {
            this.page = page
            this.contentData = await useAxiosInstance().get(`/content/${page}`)
        },
    }
})

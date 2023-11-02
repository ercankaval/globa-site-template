import {defineStore} from 'pinia'
import {useAxiosInstance} from "~/composables/use-axios-instance.js";

export const useCategoryStore = defineStore('categoryStore', {
    state: () => {
        return {
            pageData: null
        }
    },
    actions: {
        async categoryDetails(link: string) {
            this.pageData = await useAxiosInstance().get(`/get-categories/${link}`)
            return this.pageData
        },
        async categoryList(link: string) {
            this.pageData = await useAxiosInstance().get(`/list-categories/${link}`)
        },
    }
})

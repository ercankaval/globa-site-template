import {defineStore} from 'pinia'
import {useAxiosInstance} from "~/composables/use-axios-instance.js";

export const useProductStore = defineStore('productStore', {
    state: () => {
        return {
            pageData: null
        }
    },
    actions: {
        async productDetails(link: string) {
            this.pageData = await useAxiosInstance().get(`/products/${link}`)
            return this.pageData
        }
    }
})

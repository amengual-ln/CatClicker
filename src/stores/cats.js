import { defineStore } from 'pinia'
import { catApi } from '../service/catApi'

export const useCatStore = defineStore("cat", {
    state: () => ({
        cats: []
    }),
    getters: {
        getCats(state) {
            return state.cats
        },
        getCat(state) {
            return (catIndex) => state.cats[catIndex]
        }
    },
    actions: {
        async fetchCats() {
            try {
                const response = await catApi('/breeds?limit=15')
                const catData = await Promise.all(
                    response.data.map(async cat => {
                        const img = await catApi('/images/search?breed_ids=' + cat.id)
                        return {
                            ...cat,
                            img: img.data[0].url,
                            clicks: 0
                        }
                    })
                )
                this.cats = catData
            } catch (error) {
                console.error(error)
            }
        },
        increment(catId) {
            const cat = this.cats.find(cat => cat.id === catId)
            cat.clicks += 1
        }
    }
})
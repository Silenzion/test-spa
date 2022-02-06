import Vue from 'vue'
import Vuex from 'vuex'
import api from "@/api";
// Register Vuex
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        flats: null
    },
    getters: {
        getAllFlats: (state) => state.flats,
        getFlatsByFilters: (state) => (payload) => {
            console.log(payload);
            if (state.flats && Array.isArray(state.flats)) {
                return state.flats.filter((item) => {
                    const squareIsMatches = item.square >= payload.square[0] && item.square <=payload.square[1];
                    const priceIsMatches = item.price >= payload.price[0]*1e6 && item.price <= payload.price[1]*1e6;
                    const roomsIsMatches = payload.rooms.includes(item.rooms) ||
                        payload.rooms.includes('is_studio')? Boolean(item['is_studio']):false;
                    const floorIsMatches = item['floor'] >= payload['floor'][0] && item['floor'] <= payload['floor'][1];
                    console.log(item.square >= payload.square[0] , payload.price[0]*1e6 )
                    // eslint-disable-next-line no-debugger
                    debugger;
                    return  roomsIsMatches && squareIsMatches && priceIsMatches && floorIsMatches;
                });
            }
            return [];
        },

    },
    mutations: {
        SET_FLATS_INFO: (state, payload) => {
            state.flats = payload;
        }

    },
    actions: {
        async getDataFromFile(context) {
            await api.getFlatsInfo().then((response) => {
                context.commit('SET_FLATS_INFO', response.data)
            }).catch((response) => console.log(response));
        }
    }
})
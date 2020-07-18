export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

// export const getters = {
//   cat: state => {
//     return state.categories;
//   },
//   getEventById: state => id => {
//     return state.events.find(event => event.id === id);
//   },
//   events: state => {
//     return state.events;
//   },
// }
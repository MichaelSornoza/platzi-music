const eventBus = {}

eventBus.install = Vue => {
  Vue.prototype.$bus = new Vue()
}

export default eventBus

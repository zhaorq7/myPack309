import Vue from  'vue'

import App from '@/App' // @   ./src

var vm = new Vue({

    data:{
        msg:'hello  world'
    },
    render:h=>h(App)
}).$mount('#app')

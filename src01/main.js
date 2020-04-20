// ES6引入模块的方式  jquery
import $ from 'jquery'
// var $ = require('jquery')  CommonJS 模块化引入

//import Vue from  'vue'   //不是最全的  是 runtime删减版  ?
import Vue from  'vue/dist/vue.min.js'   //不是最全的  是 runtime删减版  ?

$(function () {
    $('li:odd').css('background-color','pink')
})


// es6模块化导入 css文件
import './css/1.css'
import './css/2.less'


//箭头函数
var getInfo = ()=>{
    console.log('正在学习loader')
}
getInfo()

//解构赋值
const {name ,number:num} = {name:'jack',number:666}
console.log(name,num)

//let

let address = '北京'

//字符串拼装

var str = '太阳';
console.log(`我希望今天有:${str}`)


// class-properties
class People{
    static country = '中国'
}

console.log(People.country)



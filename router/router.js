const express=require('express')
const appRoute=express.Router()
const control=require('../controller/controller')


appRoute.route('/').get(control.home)
appRoute.route('/create').get(control.create)
appRoute.route('/clear').get(control.clear)
appRoute.route('/createCookie').post(control.setCookie)

module.exports= appRoute;
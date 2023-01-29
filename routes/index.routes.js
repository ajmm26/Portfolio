const{Router,response=res, request=req}=require('express');
const{app}=require('../app');
const router= Router();
const {homeController}=require('../controllers/homeController')

router.get('/',homeController)

module.exports={
    router
}
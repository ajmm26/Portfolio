const{response, request}=require('express');

const homeController = (req=request, res=response)=>{
    res.render('index', {
        titulo: 'index'
    })
}

module.exports = {
    homeController
}
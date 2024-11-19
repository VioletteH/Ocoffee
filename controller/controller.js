import dataMapper from '../models/dataMapper.js';

const mainController = {

    async homePage(req, res){
        try{
            const products = await dataMapper.getThreeProducts();
            console.log(products[0]);
            res.render('index', {products});
          }      
          catch(error){
             console.error(error);
             res.status(500).send('Server Error'); 
          };         
    },

    async aProposPage(req, res){
        try{
            const products = await dataMapper.getProducts();
            res.render('about', {products});
          }     
          catch(error){
             console.error(error);
             res.status(500).send('Server Error'); 
          };  
    },

    async cataloguePage(req, res){
        try{
            const products = await dataMapper.getProducts();
            res.render('catalogue', {products});
          }      
          catch(error){
             console.error(error);
             res.status(500).send('Server Error'); 
          };  
      },

    async produitPage(req, res){
        try{
            const productId = Number(req.params.id); 
            const product = await dataMapper.getOneProduct(productId);
            res.render('produit', {product});
          }      
          catch(error){
             console.error(error);
             res.status(500).send('Server Error'); 
          };  
    },
  };
  
  export default mainController;
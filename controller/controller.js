import dataMapper from '../models/dataMapper.js';

const mainController = {

    async homePage(req, res){
        try{
            const products = await dataMapper.getThreeProducts();
            res.render('index', {products});
        }      
        catch(error){
            console.error(error);
            res.status(500).send('Server Error'); 
        };         
    },

    async aProposPage(req, res){
        try{
            res.render('about');
        }     
        catch(error){
            console.error(error);
            res.status(500).send('Server Error'); 
        };  
    },

    async cataloguePage(req, res){
        const selectedProduct = req.query.reference; 
        const products = await dataMapper.getProducts();
        const filteredProducts = products.filter(product => product.reference == selectedProduct);

        if (selectedProduct) {
            res.render('catalogue', { products : products, filteredProducts : filteredProducts });
        } else {
            res.render('catalogue', { products : products, filteredProducts : products });
        }
    },

    async produitPage(req, res){
        try{
            const productId = req.params.id; 
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
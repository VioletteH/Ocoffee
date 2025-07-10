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

    async aboutPage(req, res){
        try{
            res.render('about');
        }     
        catch(error){
            console.error(error);
            res.status(500).send('Server Error'); 
        };  
    },

    async cataloguePage(req, res){
        try{
            const allTypes = await dataMapper.getTypes();
            const selectedType = req.query.reference; 

            let products;
            if (selectedType && selectedType !== "") {
                products = await dataMapper.getProductByType(selectedType);
            } else {
                products = await dataMapper.getProducts();
            }

            res.render('catalogue', { 
                products, 
                types : allTypes,
                selectedType
            });
        }catch(error){
            console.error(error);
            res.status(500).send('Server Error'); 
        };  
    },

    async productPage(req, res){
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

    async contactPage(req, res){
        try{
            res.render('contact');
        }      
        catch(error){
            console.error(error);
            res.status(500).send('Server Error'); 
        };  
    }

  };
  
  export default mainController;
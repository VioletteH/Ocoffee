import dataMapper from '../models/dataMapper.js';

const adminController = {

    async loginPage(req, res){
        try{
            res.render('login', { error: null });
        }      
        catch(error){
            console.error(error);
            res.status(500).send('Server Error'); 
        };  
    }, 

    async loginPost(req, res){
        try{
            const { login, password } = req.body;
            if (login === 'admin') {
                req.session.isAdmin = true;
                res.redirect('/page-admin');
            } else {
                const error = 'Identifiant ou mot de passe incorrect';
                return res.render('login', { error }); 
            }
        }      
        catch(error){
            console.error(error);
            res.status(500).send('Server Error'); 
        };  
    }, 

    async adminPage(req, res){
        try{
            if (!req.session.isAdmin) {
                console.log('Accès refusé. L\'utilisateur n\'est pas administrateur.');
                return res.redirect('/login');  
            }
            const origins = await dataMapper.getOrigins();
            const types = await dataMapper.getTypes();
            const products = await dataMapper.getProducts();
            res.render('adminPage', { origins, types, products });        
        }   
        catch(error){
            console.error(error);
            res.status(500).send('Server Error'); 
        };  
    }, 

    async adminPost(req, res){
        try{
            if (req.body.action === 'delete') {
                const referenceToDelete = req.body['reference_to_delete'];
                await dataMapper.deleteProduct(referenceToDelete);
                return res.redirect('/page-admin');
            }

            const { reference, name, description, origin, price, type, availability } = req.body;
            const image = req.file ? req.file.filename : null;

            const existingProduct = await dataMapper.getProductByReference(reference);

            if (existingProduct) {
                const errorMessage = `Un produit avec la référence "${reference}" existe déjà. Veuillez choisir une autre référence.`;
                const origins = await dataMapper.getOrigins();
                const types = await dataMapper.getTypes();
                const products = await dataMapper.getProducts();
                return res.render('adminPage', { error: errorMessage, origins, types, products});
             }

            const product = await dataMapper.addProduct({reference, name, description, origin, price, type, availability, image});
            return res.redirect(`/produit/${product.reference}`);
        }      
        catch(error){
            console.error(error);
            res.status(500).send('Server Error'); 
        };  
    }

  };
  
  export default adminController;
const mainController = {

    homePage(req, res){
        res.render('index');
    },

    aProposPage(req, res){
        res.render('about');
    },

    cataloguePage(req, res){
        res.render('catalogue');
      },

    produitPage(req, res){
        res.render('produit');
    },
  };
  
  export default mainController;
const notFoundMW = function(req, res, next){
    res.status(404).render('404.ejs');
};

export default notFoundMW;

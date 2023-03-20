exports.route  = (req, res) =>{
    const {url} = req;

    if(url==="/"){
        res.end("Home Page 123")
    } 

}
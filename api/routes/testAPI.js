var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
res.send('API is working properly');
});


router.get( '/testAPI', ( req, res ) => res.render( 'form' ) )
router.post( '/form_post', ( req, res ) => {
    console.log(req.body)
    res.send( 'POST request to the test page' )
} )

module.exports = router;
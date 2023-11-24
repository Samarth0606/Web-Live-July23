const dog = require('./dog');
const cat = require('./cat');


// module.exports = {} //by default
// module.exports = "sam"

// whenever you require anyfolder then the index.js file inside that folder is resposible for the export of it



module.exports = {cat,dog}





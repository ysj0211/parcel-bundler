// commom.js -> node.js
const autoprefixer = require('autoprefixer');
module.exports = {
  plugins : [
    autoprefixer
  ]
};

// esm -> javascript(vanilla)
// import auto from 'autoprefixer';
// export {
//   plugins : [
//     auto
//   ]
// };
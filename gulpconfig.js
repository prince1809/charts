/*
*   This file controls the brhaviour of the build tasks in gulpfile.js
*/


var COMPONENT_NAME = 'Chart';

module.exports = {
  component: {
    file: COMPONENT_NAME + '.js',
    name: COMPONENT_NAME,
    src: 'src',
    dist: 'dist',
    //pkgName: pkg.name,
    //dependencies: dependencies
  },
  example: {
    src: 'example/src',
    dist: 'example/dist',
    files: [
      'index.html',
      'standalone.html'
    ],
    scripts: [
      'app.js'
    ],
    stylesheets: [
      'app.less'
    ]
  }

};

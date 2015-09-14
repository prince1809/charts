
var COMPONENT_NAME = 'Chart';


// Read the package.json to detect the package name and dependencies
var pkg = JSON.parse(require('fs').readFileSync('./package.json'));

var dependencies = [];
Object.keys(pkg.dependencies).forEach(function(i) {
	if (i !== 'reactify' && i!== 'paths-js') dependencies.push(i);
});


module.exports = {
  component: {
    file: COMPONENT_NAME + '.js',
    name: COMPONENT_NAME,
    src: 'src',
    dist: 'dist',
    pkgName: pkg.name,
    dependencies: dependencies
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

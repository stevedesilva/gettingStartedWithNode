// function(exports,module,require,__filename,__dirname) {

  exports.a = 42;
  module.exports.b = "Happy";
// }


// Results

// [Arguments] {
//   '0': { a: 42, b: 'Happy' },
//   '1':
//    { [Function: require]
//      resolve: { [Function: resolve] paths: [Function: paths] },
//      main:
//       Module {
//         id: '.',
//         exports: [Object],
//         parent: null,
//         filename:
//          '/Users/stevedesilva/Documents/Workspace/courses/nodejs-getting-started/silvade/modules/wrapper.js',
//         loaded: false,
//         children: [],
//         paths: [Array] },
//      extensions:
//       { '.js': [Function], '.json': [Function], '.node': [Function] },
//      cache:
//       { '/Users/stevedesilva/Documents/Workspace/courses/nodejs-getting-started/silvade/modules/wrapper.js': [Module] } },
//   '2':
//    Module {
//      id: '.',
//      exports: { a: 42, b: 'Happy' },
//      parent: null,
//      filename:
//       '/Users/stevedesilva/Documents/Workspace/courses/nodejs-getting-started/silvade/modules/wrapper.js',
//      loaded: false,
//      children: [],
//      paths:
//       [ '/Users/stevedesilva/Documents/Workspace/courses/nodejs-getting-started/silvade/modules/node_modules',
//         '/Users/stevedesilva/Documents/Workspace/courses/nodejs-getting-started/silvade/node_modules',
//         '/Users/stevedesilva/Documents/Workspace/courses/nodejs-getting-started/node_modules',
//         '/Users/stevedesilva/Documents/Workspace/courses/node_modules',
//         '/Users/stevedesilva/Documents/Workspace/node_modules',
//         '/Users/stevedesilva/Documents/node_modules',
//         '/Users/stevedesilva/node_modules',
//         '/Users/node_modules',
//         '/node_modules' ] },
//   '3':
//    '/Users/stevedesilva/Documents/Workspace/courses/nodejs-getting-started/silvade/modules/wrapper.js',
//   '4':
//    '/Users/stevedesilva/Documents/Workspace/courses/nodejs-getting-started/silvade/modules' }

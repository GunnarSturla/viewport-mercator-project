export default [{
  name: 'Documentation',
  path: '/documentation',
  data: [{
    name: 'Overview',
    children: [{
      markdown: require('../../docs/README.md')
    }, {
      name: 'What\'s New',
      markdown: require('../../docs/whats-new.md')
    }]
  }, {
    name: 'Get started',
    children: [{
      name: 'About Coordinates',
      markdown: require('../../docs/get-started/coordinates.md')
    }, {
      name: 'Offset Accuracy',
      markdown: require('../../docs/get-started/offset-accuracy.md')
    }]
  }, {
    name: 'API Reference',
    children: [{
      name: 'WebMercatorViewport',
      markdown: require('../../docs/api-reference/web-mercator-viewport.md')
    }, {
      name: 'Web Mercator Utils',
      markdown: require('../../docs/api-reference/web-mercator-utils.md')
    }]
  }]
}];

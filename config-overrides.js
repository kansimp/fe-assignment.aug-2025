const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@routes': 'src/routes',
        '@redux': 'src/redux',
        '@A1': 'src/assignments/A1',
        '@A2': 'src/assignments/A2',
        '@A3': 'src/assignments/A3',
    })(config);

    return config;
};

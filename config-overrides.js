const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@atom': 'src/components/atom',
        '@pages': 'src/components/pages',
        '@layouts': 'src/layouts',
        '@routes': 'src/routes',
        '@images': 'src/assets/images',
        '@icons': 'src/assets/icons',
        '@setup': 'src/setup',
        '@redux': 'src/redux',
    })(config);

    return config;
};

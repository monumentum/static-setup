const gulpStatic = require('gulp-static-gen');
const data = require('./src/languages');

const templateInfo = lang => ({
    data: data[lang],
    input: './src/templates/index.hbs',
    output: {
        dir: './dist',
        name: `index-${lang}.html`,
    }
});

gulpStatic({
    css: {
        input: './src/sass/index.sass',
        output: './dist/assets/css',
        watch: './src/sass/**/*',
    },
    hbs: {
        batch : ['./src/templates/partials'],
        watch : './src/templates/**/*',
        multiple: [
            templateInfo('en'),
            templateInfo('pt-br'),
        ]
    },
    img: {
        input: './src/images/**/*',
        output: './dist/assets/images',
        config: {
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{removeViewBox: true}]
        }
    },
    scripts: {
        input: './src/scripts/index.js',
        output: './dist/assets/scripts/',
        watch: './src/scripts/**/*',
    }
});
exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === 'build-html') {
        config.loader('null', {
            test: /uikit/,
            loader: 'null-loader'
        })
    }
}
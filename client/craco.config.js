// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        // '@primary-color': '#1DA57A',
                        // ...getThemeVariables({
                        //     dark: true,
                        //     compact: true,
                        // }),
                        // '@layout-footer-background': '#333333',
                        // '@layout-body-background': '#333333',
                        // '@text-color-dark': 'rgba(175, 189, 209, 0.9)',
                        // '@text-color': 'rgba(175, 189, 209, 0.9)',
                        // '@font-size-base': '13px',
                        // '@layout-sider-background': '#025EA1',
                        // '@layout-header-background': '#025EA1',
                        // '@primary-color': '#1976D2',
                        // '@menu-dark-inline-submenu-bg': '#014A80',
                        // '@table-bg': '@component-background;'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
    ],
}

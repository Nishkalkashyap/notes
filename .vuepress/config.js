const path = require('path');

const AllTags = require('./../scripts/types').AllTags;

module.exports = {
    title: 'Notes',
    desctiption: 'Personal website for notes',
    ga: 'UA-112064718-3',
    serviceWorker: true,
    head: [
        [
            'link', {
                href: '/pwa/manifest.json',
                rel: 'manifest'
            }
        ],
        [
            'link', {
                rel: 'shortcut icon',
                type: 'image/svg',
                href: '/images/icon.png'
            },
        ]
    ],
    markdown: {
        config: md => {
            md.use(require('markdown-it-html5-embed'), {
                html5embed: {
                    useImageSyntax: true,
                    useLinkSyntax: false
                }
            });

            md.use(require('markdown-it-imsize'));
            md.use(require("markdown-it-admonition"));
            md.use(require('markdown-it-task-lists'));
            md.use(require('markdown-it-multimd-table'));
        }
    },
    themeConfig: {
        logo: '/images/icon-svg.svg',
        editLinks: true,
        repoLabel: 'GitHub',
        repo: 'https://github.com/Nishkalkashyap/Quark-docs',
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true
        },
        nav: [{
                text: 'Guide',
                link: '/guide/intro.md'
            },
            {
                text: 'Tags',
                items: Object.keys(AllTags).map((tag) => {
                    return {
                        text: tag,
                        link: `/tags/${tag}.html`
                    }
                })
            },
            {
                text: 'API',
                items: [{
                        text: 'References',
                        link: '/references/'
                        // link: '/references/app.html'
                    }, {
                        text: 'Structures',
                        link: '/structures/'
                        // link: '/structures/view-provider.html'
                    }
                    // {
                    //     text: 'Style Guide',
                    //     link: '/guide/intro.html'
                    // }
                ]
            },
            {
                text: 'More',
                items: [{
                        text: 'FAQ',
                        link: '/FAQ/glossary.html'
                    },
                    {
                        text: 'Snippets',
                        link: '/snippets/'
                    },
                    {
                        text: 'Links',
                        items: [{
                                text: 'Social',
                                link: 'https://social.quarkjs.io/'
                            },
                            {
                                text: 'GitHub',
                                link: 'https://github.com/Nishkalkashyap/Quark-docs'
                            }
                        ]
                    }
                ]
            },
            {
                text: 'Download',
                link: '/download/'
            }
        ],
        sidebar: {
            "/guide/": [
                "getting-started.md"
            ],
            "/references/": [
                "app.md"
            ],
            "/structures/": [
                "bottomview-controller.md"
            ],
            "/FAQ/": [
                "license.md"
            ],
            "/tags/": [
                "api.md",
                "faq.md",
                "guide.md",
                "structures.md",
                "arduino.md",
                "typescript.md",
                "javascript.md",
                "nodejs.md"
            ],
            "/snippets/": [
                "install-nodejs.md"
            ]
        }
    },
    configureWebpack: (config) => {
        config.resolve.alias['@public'] = path.resolve('./.vuepress/public');
        config.resolve.alias['@vuepress'] = path.resolve('./.vuepress');
        config.resolve.alias['@scripts'] = path.resolve('./scripts');
    }
    // configureWebpack: {
    //     entry: {
    //         styles: [
    //             'vuesax/dist/vuesax.css'
    //         ]
    //     }
    //     // module: {
    //     //     rules: [{
    //     //         test: /\.css$/,
    //     //         use: ExtractTextPlugin.extract({
    //     //             fallback: "style-loader",
    //     //             use: "css-loader"
    //     //         })
    //     //     }]
    //     // },
    //     // plugins: [
    //     //     new ExtractTextPlugin("styles.css")
    //     // ]
    // }
    // chainWebpack: (config) => {
    //     console.log(config);
    //     const HtmlWebpackPlugin = config.plugins.find(plugin => {
    //         return plugin.constructor.name === 'HtmlWebpackPlugin'
    //     })

    //     HtmlWebpackPlugin.options.chunksSortMode = 'none';
    //     return config;
    // }
}
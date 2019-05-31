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
            link: '/guide/'
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
        // {
        //     text: 'API',
        //     items: [{
        //             text: 'References',
        //             link: '/references/'
        //         }, {
        //             text: 'Structures',
        //             link: '/structures/'
        //         }
        //     ]
        // },
        {
            text: 'More',
            items: [
                {
                    text: 'Snippets',
                    link: '/snippets/'
                },
                {
                    text: 'Links',
                    items: [
                        {
                            text: 'Quark',
                            link: 'https://quarkjs.io/'
                        },
                        {
                            text: 'Social',
                            link: 'https://social.quarkjs.io/'
                        },
                        {
                            text: 'GitHub',
                            link: 'https://github.com/Nishkalkashyap/'
                        }
                    ]
                }
            ]
        },
            // {
            //     text: 'Download',
            //     link: '/download/'
            // }
        ],
        sidebar: {
            "/guide/": [
                "getting-started.md"
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
}
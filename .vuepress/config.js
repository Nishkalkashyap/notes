const path = require('path');

const AllTags = require('./../scripts/types').AllTags;

module.exports = {
    title: 'Notes',
    desctiption: 'Personal website for personal notes',
    ga: 'UA-112064718-2',
    serviceWorker: true,
    head: [
        [
            'link', {
                href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                rel: 'stylesheet'
            }
        ],
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
                text: 'All Docs',
                link: '/all/'
            }, {
                text: 'Snippets',
                link: '/snippets/'
            },
            {
                text: 'Config files',
                link: '/config-files/'
            },
            {
                text: 'Tags',
                link: '/tags/'
                // items: Object.keys(AllTags).map((tag) => {
                //     return {
                //         text: tag,
                //         link: `/tags/${tag}.html`
                //     }
                // })
            },
            {
                text: 'More',
                items: [{
                    text: 'Links',
                    items: [{
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
                }]
            },
        ],
        sidebar: {
            "/config-files/": [
                "appveyor.md",
                "travis.github.release.md",
                "gitignore.md",
                "travis-firebase-hosting.md",
                "travis-github-pages.md",
                "tsconfig-json.md",
                "cloudbuild-yaml.md"
            ],
            "/tags/": [
                "email-replies.md",
                "appveyor.md",
                "travis.md",
                "config-files.md",
                "firebase.md",
                "google-cloud.md",
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
                "appveyor-encrypt-files.md",
                "travis-firebase.md",
                "travis-github-pages.md",
                "cloud-build.md"
            ],
            "/all/": [
                ""
            ],
            "/replies/": [
                "email-1.md"
            ]
        }
    },
    configureWebpack: (config) => {
        config.resolve.alias['@public'] = path.resolve('./.vuepress/public');
        config.resolve.alias['@vuepress'] = path.resolve('./.vuepress');
        config.resolve.alias['@scripts'] = path.resolve('./scripts');
    }
}
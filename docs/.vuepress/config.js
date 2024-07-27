import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'en-US',

  title: 'MC TIL',
  base: '/MCstructure/',
  description: 'Some structure and enum information for minecraft bedrock edition.',
  plugins: [
    activeHeaderLinksPlugin(),
    backToTopPlugin(),
    mediumZoomPlugin(),
    copyCodePlugin(),
    searchPlugin({
      MaxSuggestions: 20
    })
  ],
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/Redbeanw44602/mcstructure' }
    ],
    sidebar: {
      '/1.14.60.5/': [
        {
          text: 'Struct',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'structure/A.md',
            'structure/B.md',
            'structure/C.md',
            'structure/D.md',
            'structure/E.md',
            'structure/F.md',
            'structure/G.md',
            'structure/H.md',
            'structure/I.md',
            'structure/J.md',
            'structure/K.md',
            'structure/L.md',
            'structure/M.md',
            'structure/N.md',
            'structure/O.md',
            'structure/P.md',
            'structure/Q.md',
            'structure/R.md',
            'structure/S.md',
            'structure/T.md',
            'structure/U.md',
            'structure/V.md',
            'structure/W.md',
            'structure/X.md',
            'structure/Z.md',
            'structure/`.md'
          ]
        },
        {
          text: 'Enums',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'enums/A.md',
            'enums/B.md',
            'enums/C.md',
            'enums/D.md',
            'enums/E.md',
            'enums/F.md',
            'enums/G.md',
            'enums/H.md',
            'enums/I.md',
            'enums/J.md',
            'enums/K.md',
            'enums/L.md',
            'enums/M.md',
            'enums/N.md',
            'enums/O.md',
            'enums/P.md',
            'enums/R.md',
            'enums/S.md',
            'enums/T.md',
            'enums/U.md',
            'enums/V.md',
            'enums/W.md',
            'enums/X.md',
            'enums/Z.md',
            'enums/`.md'
          ]
        }
      ],
      '/1.16.201/': [
        {
          text: 'Struct',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'structure/A.md',
            'structure/A~1.md',
            'structure/B.md',
            'structure/B~1.md',
            'structure/B~2.md',
            'structure/C.md',
            'structure/C~1.md',
            'structure/C~2.md',
            'structure/C~3.md',
            'structure/D.md',
            'structure/D~1.md',
            'structure/D~2.md',
            'structure/D~3.md',
            'structure/D~4.md',
            'structure/D~5.md',
            'structure/D~6.md',
            'structure/D~7.md',
            'structure/D~8.md',
            'structure/D~9.md',
            'structure/D~10.md',
            'structure/E.md',
            'structure/E~1.md',
            'structure/F.md',
            'structure/F~1.md',
            'structure/G.md',
            'structure/H.md',
            'structure/I.md',
            'structure/I~1.md',
            'structure/I~2.md',
            'structure/J.md',
            'structure/K.md',
            'structure/L.md',
            'structure/L~1.md',
            'structure/M.md', 
            'structure/M~1.md',
            'structure/M~2.md',
            'structure/M~3.md',
            'structure/N.md',
            'structure/O.md',
            'structure/P.md',
            'structure/P~1.md',
            'structure/P~2.md',
            'structure/P~3.md',
            'structure/Q.md',
            'structure/R.md',
            'structure/R~1.md',
            'structure/R~2.md',
            'structure/R~3.md',
            'structure/S.md',
            'structure/S~1.md',
            'structure/S~2.md',
            'structure/S~3.md',
            'structure/S~4.md',
            'structure/T.md',
            'structure/T~1.md',
            'structure/U.md',
            'structure/V.md',
            'structure/W.md',
            'structure/W~1.md',
            'structure/X.md',
            'structure/Z.md'
          ]
        },
        {
          text: 'Enums',
          collapsable: true,
          sidebarDepth: 4,
          children: [
            'enums/A.md',
            'enums/B.md',
            'enums/C.md',
            'enums/D.md',
            'enums/D~1.md',
            'enums/D~2.md',
            'enums/D~3.md',
            'enums/E.md',
            'enums/F.md',
            'enums/G.md',
            'enums/H.md',
            'enums/I.md',
            'enums/J.md',
            'enums/K.md',
            'enums/L.md',
            'enums/M.md',
            'enums/N.md',
            'enums/O.md',
            'enums/P.md',
            'enums/R.md',
            'enums/S.md',
            'enums/T.md',
            'enums/U.md',
            'enums/V.md',
            'enums/W.md'
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6135a00c21e0dd2655a0e4a1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-88yf6ch1',
                  apiId: '5a6481f2-3d99-4ede-918a-6b6451308388'
                },
                {
                  buildHookId: '6135a00c40b15354f5fa2239',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cimi9typ',
                  apiId: '860b6968-e046-42e2-875e-9c0245d6ee8f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/printerservicemanager/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cimi9typ.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

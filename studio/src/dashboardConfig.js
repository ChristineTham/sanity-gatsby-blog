export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f98e8764eb4b7970862996b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kcmzvi6e',
                  apiId: '6007f99d-f9c9-450d-8a99-1393e2409510'
                },
                {
                  buildHookId: '5f98e876b8755ea2d25b8b9d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r3a7xpo2',
                  apiId: 'f989fa04-3f23-4a3d-8c77-8bbde926738a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChristineTham/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r3a7xpo2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

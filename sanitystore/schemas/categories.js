export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    }
  ],
  orderings: [
    {
      title: 'Title, New',
      name: 'titleNewDesc',
      by: [
        { field: 'title', direction: 'desc'}
      ]
    }
  ]
}
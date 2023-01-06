export default {
  name: 'headerBanner',
  title: 'HeaderBanner',
  type: 'document',
  fields: [
    {
      name: 'smallText',
      title: 'SmallText',
      type: 'string'
    },
    {
      name: 'mediumText',
      title: 'MediumText',
      type: 'string'
    },
    {
      name: 'largeText',
      title: 'LargeText',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'background',
      title: 'Background',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
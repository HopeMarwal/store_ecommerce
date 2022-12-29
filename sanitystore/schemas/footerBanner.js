export default {
  name: 'footerBanner',
  title: 'FooterBanner',
  type: 'document',
  fields: [
    {
      name: 'smallText1',
      title: 'SmallText1',
      type: 'string'
    },
    {
      name: 'smallText2',
      title: 'SmallText2',
      type: 'string'
    },
    {
      name: 'smallText3',
      title: 'SmallText3',
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
    }
  ]
}
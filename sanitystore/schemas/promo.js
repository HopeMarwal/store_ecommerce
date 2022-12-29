export default {
  name: 'promo',
  title: 'Promo',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string'
    }, 
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true}
    }
  ]
}
import {defineField, defineType} from 'sanity'
import {TiersIcon} from '@sanity/icons'
export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TiersIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})

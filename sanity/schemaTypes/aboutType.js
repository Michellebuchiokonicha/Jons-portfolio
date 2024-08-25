import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'



export const aboutType = defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
      defineField ({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}]
      }),
    ],
  });

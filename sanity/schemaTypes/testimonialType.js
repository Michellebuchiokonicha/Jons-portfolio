import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'


export const testimonialType = defineType ({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
       defineField ({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
       defineField ({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
       defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        }),
      
       defineField ({
            name: 'text',
            title: 'Text',
            type: 'text',
        }),
    defineField ({
            name: 'name',
            title: 'Name',
            type: 'string',
        })
    ]
   });

  
import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'


export const experienceType = defineType ({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
       defineField ({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
       defineField ({
            name: 'logo',
            title: 'Logo',
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
            name: 'date',
            title: 'Date',
            type: 'string'
        }),
       defineField ({
            name: 'location',
            title: 'Location',
            type: 'string'
        }),
       defineField ({
            name: 'description',
            title: 'Description',
            type: 'text',
        })
    ]
   });

  
import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'


export const serviceType = defineType ({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
       defineField ({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
       defineField ({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
       defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            }
        }),
       defineField ({
            name: 'activityOne',
            title: 'ActivityOne',
            type: 'text'
        }),
       defineField ({
            name: 'activityTwo',
            title: 'ActivityTwo',
            type: 'text'
        }),
       defineField ({
            name: 'activityThree',
            title: 'activityThree',
            type: 'text',
        }),
        defineField ({
            name: 'activityFour',
            title: 'activityFour',
            type: 'text',
        }),
        defineField ({
            name: 'activityFive',
            title: 'activityFive',
            type: 'text',
        })
    ]
   });

  
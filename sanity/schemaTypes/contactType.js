import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'


export const contactType = defineType({
    name: 'contactFormSubmission',
    title: 'Contact Form Submission',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
      },
    ],
});
  
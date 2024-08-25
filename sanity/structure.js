// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('experience').title('Experience'),
       S.documentTypeListItem('testimonial').title('Testimonial'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && ![ 'experience','testimonial'].includes(item.getId()),
      ),
    ])

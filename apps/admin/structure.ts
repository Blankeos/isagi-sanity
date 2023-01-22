import {StructureResolver} from 'sanity/desk'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('> CONTENT')
    .items([
      // Make a singleton of the document with ID “siteSettings”
      S.documentTypeListItem('post').title('Blog Posts'),
      // Add a visual divider
      S.divider(),
      // Add the rest of the document types, but filter out the siteSettings type defined above
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'post'),
    ])

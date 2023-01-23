import {DefaultDocumentNodeResolver, StructureResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content:')
    .items([
      // Make a singleton of the document with ID “siteSettings”
      S.documentTypeListItem('post').title('Blog Posts'),
      // Add a visual divider
      S.divider(),
      // Add the rest of the document types, but filter out the siteSettings type defined above
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'post'),
    ])

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  if (schemaType == 'post') {
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          // Required: Accepts an async function
          // OR a string
          url: `${'https://isagi.vercel.app'}/api/preview`,
          // Optional: Set the default size
          defaultSize: 'desktop', // default 'desktop'
          // Optional: Add a reload button, or reload new document revisions
          reload: {
            button: true, // default `undefined`
          },
          // Optiona: Pass attributes to the underlying `iframe` element:
          attributes: {},
        })
        .title('Preview'),
    ])
  }
}

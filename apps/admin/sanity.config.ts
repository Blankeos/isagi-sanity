import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './structure'

import myLogo from './logo'

// Icons
import {CodeBlockIcon} from '@sanity/icons'
import {myTheme} from './theme'

export default defineConfig({
  name: 'default',
  title: `Isagi Studio`,

  projectId: 'h4p5r9e6',
  dataset: 'production',

  plugins: [
    deskTool({
      title: 'For Writers',
      structure,
    }),
    visionTool({
      title: 'For Devs',
      icon: CodeBlockIcon,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: myLogo,
    },
  },
  theme: myTheme,
})

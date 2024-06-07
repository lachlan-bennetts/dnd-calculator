import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run dnd-ui:start',
        production: 'nx run dnd-ui:preview',
      },
      ciWebServerCommand: 'nx run dnd-ui:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});

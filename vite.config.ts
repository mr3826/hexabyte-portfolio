import { defineConfig, loadEnv, type Plugin } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Inject the analytics tag only when a container id is configured.
 *
 * Gated rather than always-on so that an unconfigured build ships no third-party
 * script at all — no extra request, no cookie, and no consent obligation for a
 * tag that would report to nobody.
 *
 * The id shape decides the snippet: GTM-… is Tag Manager, G-… is GA4 directly.
 * trackEvent() pushes {event: name, …} to window.dataLayer, which is Tag
 * Manager's native trigger model; for GA4 the events are forwarded through
 * gtag() as well — see src/utils/analytics.ts.
 */
function analyticsTag(mode: string): Plugin {
  return {
    name: 'hexabyte-analytics-tag',
    transformIndexHtml() {
      const id = loadEnv(mode, __dirname, 'VITE_').VITE_GTM_ID?.trim()
      if (!id) return []

      if (id.startsWith('GTM-')) {
        return [
          {
            tag: 'script',
            injectTo: 'head' as const,
            children:
              `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});` +
              `var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;` +
              `j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);` +
              `})(window,document,'script','dataLayer','${id}');`,
          },
        ]
      }

      return [
        {
          tag: 'script',
          injectTo: 'head' as const,
          attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${id}` },
        },
        {
          tag: 'script',
          injectTo: 'head' as const,
          children:
            `window.dataLayer=window.dataLayer||[];` +
            `function gtag(){dataLayer.push(arguments);}` +
            `gtag('js',new Date());gtag('config','${id}');`,
        },
      ]
    },
  }
}

export default defineConfig(({ mode }) => ({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    analyticsTag(mode),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Test config lives in vitest.config.ts, which Vitest prefers over this file.
}))

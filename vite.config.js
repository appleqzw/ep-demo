import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export default ({ mode }) => {
  return defineConfig({
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver({importStyle: 'sass'})]
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
      })
    ],
    server: {
      host: '0.0.0.0',
      port: 3000
    }
  })
}

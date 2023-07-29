import type { NuxtOptionsBuild, NuxtWebpackEnv } from '@nuxt/types/config/build'
import type { Configuration } from 'webpack'

//The build property Nuxt lets you customize the webpack configuration for building your web application as you want.

export const build: NuxtOptionsBuild = {
    extractCSS: { ignoreOrder: true },
    transpile: ['camelcase-keys', '@chantouchsek/validatorjs'],
    extend(config: Configuration, { isDev, isClient }: NuxtWebpackEnv) {
        if (!isDev && isClient) {
          config.module?.rules.push({
            test: /\.worker\.js$/,
            use: { loader: 'worker-loader' },
            exclude: /(node_modules)/,
          })
        }
        if (isDev) config.mode = 'development'
        config.node = { fs: 'empty' }
      },
      devMiddleware: {
        headers: {
          'Cache-Control': 'no-store',
          Vary: '*',
        },
      },
      loaders: process.env.NODE_ENV === 'production' ? {} : { css: { modules: false } },
}
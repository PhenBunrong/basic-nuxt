import type { Context } from '@nuxt/types'
import type { GlobalVuetifyPreset } from 'vuetify/types/services/presets'
import LRU from 'lru-cache'
import colors from 'vuetify/es5/util/colors'
export default ({ app }: Context) => {
    const minifyTheme = (css: string) => css.replace(/\n/g, '').replace(/\s\s+/g, ' ')
    const themeCache = new LRU({ max: 10, ttl: 1000 * 60 * 60 })
    return {
        theme: {
            options: { customProperties: true, minifyTheme, themeCache, cspNonce: 'dQw4w9WgXcQ' },
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                },
                light: {
                    background: '#ffffff',
                    surface: '#f2f5f8',
                    primary: '#615EE0',
                    secondary: colors.grey.darken3,
                    tertiary: '#9F9FB1',
                    accent: colors.grey.darken3,
                    error: '#F15454',
                    info: '#00d3ee',
                    success: '#3EC283',
                    warning: '#ffa21a',
                  },
            }
        },
        lang: {},
    } as GlobalVuetifyPreset
}
//import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '家常小炒！',
  description: 'My study notes',

  theme: hopeTheme({
  logo: 'https://nuouo-img.oss-cn-shenzhen.aliyuncs.com/img/202407312052865.svg',
  navbar: ['/', '/get-started'],
  }),

	
	head: [['link', { rel: 'icon', href: 'https://nuouo-img.oss-cn-shenzhen.aliyuncs.com/img/202407312052865.svg' }]],
 
	bundler: viteBundler(),
	
})

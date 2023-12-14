import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '店舗型ふるさと納税 ふるさとズ ヘルプサイト',
			favicon: '/favicon.svg',
			logo: {
				alt: 'ふるさとズ',
				replacesTitle: true,
				light: './src/assets/images/furusatos_header_logo.svg',
				dark: './src/assets/images/furusatos_header_logo.svg',
			},
			customCss: [
				'./src/assets/styles/custom.css',
			],
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '自治体関係者向け',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'トップページ', link: '/lg/' },
						{ label: '登録店舗', link: '/lg/shop/' },
						{ label: 'お知らせ管理', link: '/lg/news/' },
						{ label: '注文管理', link: '/lg/order/' },
						{ label: '請求管理', link: '/lg/claim/' },
						{ label: '返礼品管理', link: '/lg/product/' },
						{ label: 'チケット利用状況', link: '/lg/ticket/' },
						{ label: 'クラウドファンディング', link: '/lg/crowdfunding/' },
						{ label: '寄附金の使い道管理', link: '/lg/donation/' },
						{ label: 'よくある質問管理', link: '/lg/faq/' },
						{ label: '応援メッセージ', link: '/lg/message/' },
						{ label: '対象外エリア', link: '/lg/area/' },
						{ label: 'メールマガジン', link: '/lg/mailmagazine/' },
						{ label: 'ふるさとズ利用料', link: '/lg/fee/' },
						{ label: 'データ資料送付', link: '/lg/data/' },
						{ label: '設定', link: '/lg/setting/' },
					],
				},				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

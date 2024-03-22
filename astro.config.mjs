import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://help.furusatos.com',
  base: '/',
	integrations: [
		starlight({
			title: '店舗型ふるさと納税 ふるさとズ ヘルプサイト',
			favicon: './favicon.svg',
			logo: {
				alt: 'ふるさとズ',
				replacesTitle: true,
				light: '/src/assets/images/furusatos_header_logo.svg',
				dark: '/src/assets/images/furusatos_header_logo.svg',
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
				facebook: 'https://www.facebook.com/furusatos',
				instagram: 'https://www.instagram.com/furusatoscom/',
				'x.com': 'https://twitter.com/furusatoscom',
				youtube: 'https://www.youtube.com/@furusatos',
			},
			sidebar: [
				{ label: 'ふるさとズヘルプサイトTOP', link: '/' },
				{ label: 'よくある質問', link: '/faq/' },
				{
					label: '自治体関係者向け',
					items: [
						{ label: '自治体関係者向けTOP', link: '/lg/' },
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
						{ label: 'その他', 
							items: [
								{ label: 'ふるさと納税do連携マニュアル', link: '/lg/furusatodo/' },
								{ label: '銀行振込対応', link: '/lg/banktransfer/' },
								{ label: 'コンビニ決済対応', link: '/lg/conveniencepayment/' },
								{ label: 'ゲスト（会員登録なし）寄附', link: '/lg/guest/' },
								{ label: '届けるX（Twitter）キャンペーン', link: '/lg/todokeru/' },
							]
					 },
					],
				},
				{
					label: '店舗管理者向け',
					items: [
						{ label: '店舗管理者向けTOP', link: '/shops/' },
						{ label: '注文管理', link: '/shops/order/' },
						{ label: 'バーコード読取', link: '/shops/barcode/' },
						{ label: '返礼品管理', link: '/shops/product/' },
						{ label: '応援メッセージ', link: '/shops/message/' },
						{ label: 'チケット利用状況', link: '/shops/ticket/' },
						{ label: 'プロモーションツール', link: '/shops/tool/' },
						{ label: '請求管理', link: '/shops/claim/' },
						{ label: 'スタッフ管理', link: '/shops/staff/' },
						{ label: '個人設定', link: '/shops/setting/' },
						{ label: 'LINEでのログイン', link: '/shops/linelogin/' },

					],
				},
				{
					label: '店舗スタッフ向け',
					items: [
						{ label: '店舗スタッフ向けTOP', link: '/staff/staff/' },
					],
				},
				{ label: 'お役立ちツール', link: '/promotion-tools/' },
			],
			lastUpdated: true,
			pagination: false,
		}),
	],
});

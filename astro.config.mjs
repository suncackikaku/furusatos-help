import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://help.furusatos.com',
  base: '/',
	integrations: [
		starlight({
			head: [
				// {
				// 	tag: 'script',
				// 	attrs: {
				// 		src: '/src/assets/js/script.js',
				// 		defer: true,
				// 	}
				// },
				{
					tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://example.com/og.png',
          },
				}
			],
			title: '店舗型ふるさと納税 ふるさとズ ヘルプサイト',
			head: [
        {
          tag: 'script',
          content:
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P5LSGZ3K');",
        },
				{
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: '店舗型ふるさと納税®ふるさとズ ヘルプサイト',
          },
        },
				{
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://help.furusatos.com/ogp.png',
          },
        },
      ],
      components: {
        SkipLink: './src/components/SkipLink.astro',
      },
			favicon: './favicon.svg',
			logo: {
				alt: 'ふるさとズ',
				replacesTitle: true,
				light: '/src/assets/images/furusatos_header_logo.svg',
				dark: '/src/assets/images/furusatos_header_logo.svg',
			},
			customCss: [
				'./src/assets/styles/custom.css',
				'@fontsource/ibm-plex-sans-jp/400.css',
				'@fontsource/ibm-plex-sans-jp/600.css',
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
				{ label: 'お知らせ', link: '/info/' },
				{ label: 'よくある質問', link: '/faq/' },
				{
					label: '自治体関係者向け',
					items: [
						{ label: '自治体関係者向けTOP', link: '/lg/' },
						{ label: '登録店舗', link: '/lg/shop/' },
						{ label: 'お知らせ管理', link: '/lg/news/' },
						{ label: '注文管理', link: '/lg/order/' },
						{ label: '請求管理', link: '/lg/claim/' },
						{ label: '返礼品管理', 
							items: [
								{ label: '新規登録', link: '/lg/product/' },
								{ label: '編集・削除等', link: '/lg/product_1/' },
								{ label: 'オンラインクーポンの設定', link: '/lg/online-coupon-activate/' },
							]
						},
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
								{ label: 'ふるさと納税do連携-初期設定', link: '/lg/furusatodo/' },
								{ label: 'ふるさと納税do-各マスタ登録', link: '/lg/furusatodo_registrant' },
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
						{ label: 'オンラインクーポンの登録', link: '/shops/online-coupon/' },
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
				{ label: 'リリースノート', link: '/release-notes/' },
				{ label: 'お役立ちツール', link: '/promotion-tools/' },
			],
			lastUpdated: true,
			pagination: false,
		}),
	],
});

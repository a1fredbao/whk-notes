import { withMermaid } from "vitepress-plugin-mermaid";

function resolveBase() {
	const configuredBase = process.env.VITE_BASE;
	if (!configuredBase) return "/";

	const base = configuredBase.trim();
	if (!base || base === "/") return "/";

	return `/${base.replace(/^\/+|\/+$/g, "")}/`;
}

// https://vitepress.dev/reference/site-config
export default withMermaid({
	base: resolveBase(),
	title: "Alfred's whk notes",
	description: "An retired OIer",
	lang: "zh-CN",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "主页", link: "/" },
			{ text: "化学", link: "/chemistry" },
			{
				text: "生物",
				link: "/biology/必修一/第 1 章 走进生物学/第 2 节 实验探究是学习生物学的重要途径",
			},
		],

		outline: "deep",

		sidebar: {
			"/chemistry/": [chemistrySidebar()],
			"/biology/": [biologySidebar()],
		},

		search: {
			provider: "algolia",
			options: {
				appId: "M6KC3YNMXX",
				indexName: "whk-notes-crawler",
				apiKey: "cc0e312f1538c7b06fc6ab5d7bee194e",
			},
		},

		footer: {
			message: "Released under the CC-BY-NC-4.0 License.",
			copyright: "Copyright © 2026-present Alfred Bao",
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/a1fredbao/whk-notes" },
		],

		lastUpdated: {
			text: "上次更新于",
			formatOptions: {
				dateStyle: "full",
				timeStyle: "medium",
			},
		},

		editLink: {
			pattern: "https://github.com/a1fredbao/whk-notes/edit/main/:path",
			text: "在 Github 上编辑此页面",
		},

		externalLinkIcon: true,
	},
	markdown: {
		math: true,
	},
	sitemap: {
		hostname: "https://whk.alfredbao.cn",
	},
});

function chemistrySidebar() {
	return {
		text: "化学",
		link: "/chemistry/",
		items: [
			{
				text: "化学基本原理",
				link: "/chemistry/basic-principles/",
				items: [
					{
						text: "原子结构基础",
						link: "/chemistry/basic-principles/atom-structure",
					},
					{
						text: "核外电子排布与离子",
						link: "/chemistry/basic-principles/electron-configuration-and-ions",
					},
					{
						text: "化学键与晶体",
						link: "/chemistry/basic-principles/chemical-bonds-and-crystals",
					},
					{
						text: "电解质与分散系",
						link: "/chemistry/basic-principles/electrolytes-and-dispersion-systems",
					},
					{
						text: "化学计量",
						link: "/chemistry/basic-principles/stoichiometry",
					},
					{
						text: "离子反应与简单的平衡移动",
						link: "/chemistry/basic-principles/ionic-reactions-and-equilibrium-shifts",
					},
					{
						text: "氧化还原",
						link: "/chemistry/basic-principles/redox-reactions",
					},
				],
			},
			{
				text: "元素化学",
				link: "/chemistry/elemental/",
				items: [
					{
						text: "氯气与次氯酸",
						link: "/chemistry/elemental/1-Cl2-and-HClO",
					},
				],
			},
		],
	};
}

function biologySidebar() {
	return {
		text: "生物",
		items: [
			{
				text: "必修一·分子与细胞",
				items: [
					{
						text: "第 1 章 走进生物学",
						items: [
							{
								text: "第 1 节 生物学是与人类生活密切相关的自然科学（存目）",
							},
							{
								text: "第 2 节 实验探究是学习生物学的重要途径",
								link: "/biology/必修一/第 1 章 走进生物学/第 2 节 实验探究是学习生物学的重要途径",
							},
							{
								text: "第 3 节 细胞是生物体结构的基本单位",
								link: "/biology/必修一/第 1 章 走进生物学/第 3 节 细胞是生物体结构的基本单位",
							},
						],
					},
				],
			},
		],
	};
}

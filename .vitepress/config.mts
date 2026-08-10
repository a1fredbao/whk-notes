import { defineConfig } from "vitepress";

function resolveBase() {
	const configuredBase = process.env.VITE_BASE;
	if (!configuredBase) return "/";

	const base = configuredBase.trim();
	if (!base || base === "/") return "/";

	return `/${base.replace(/^\/+|\/+$/g, "")}/`;
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: resolveBase(),
	title: "Alfred's whk notes",
	description: "An retired OIer",
	lang: "zh-CN",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "主页", link: "/" },
			{ text: "化学", link: "/chemistry" },
		],

		sidebar: {
			"/chemistry/": [
				{
					text: "化学",
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
					],
				},
			],
		},

		search: {
			provider: "local",
		},

		footer: {
			message: "Released under the CC-BY-NC-4.0 License.",
			copyright: "Copyright © 2026-present Alfred Bao",
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/a1fredbao/whk-notes" },
		],
	},
	markdown: {
		math: true,
	},
	sitemap: {
		hostname: "https://whk.alfredbao.cn",
	},
});

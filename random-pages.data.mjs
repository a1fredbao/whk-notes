import { createContentLoader } from "vitepress";

const EXCLUDED_ROUTES = new Set([
	"/",
	"/index",
	"/random",
]);

function isExcludedPage({ url, frontmatter }) {
	const path = url.replace(/\.html$/, "").replace(/\/+$/, "");
	const baseName = path.split("/").pop();

	return (
		EXCLUDED_ROUTES.has(path) ||
		baseName === "404" ||
		frontmatter.random === false ||
		frontmatter.draft === true ||
		frontmatter.layout === false ||
		frontmatter.layout === "home" ||
		frontmatter.isHome === true
	);
}

export default createContentLoader("**/*.md", {
	transform(raw) {
		return raw.filter((page) => !isExcludedPage(page)).map(({ url }) => url);
	},
});

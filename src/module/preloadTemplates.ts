export const preloadTemplates = async function() {
	const templatePaths = [
		// Add paths to "modules/markdown-plugins/templates"
	];

	return loadTemplates(templatePaths);
}

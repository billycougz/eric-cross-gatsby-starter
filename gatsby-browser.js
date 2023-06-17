export const wrapRootElement = ({ element }) => {
	defaultToDarkMode();
	return element;
};

function defaultToDarkMode() {
	const storageKey = 'theme-ui-color-mode';
	const currentMode = localStorage.getItem(storageKey);
	if (!currentMode) {
		localStorage.setItem(storageKey, 'dark');
	}
}

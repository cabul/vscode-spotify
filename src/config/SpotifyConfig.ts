import { workspace } from 'vscode';

function getConfig() {
	return workspace.getConfiguration('spotify');
}

export function isButtonToBeShown(buttonName: string): boolean {
	return getConfig().get('show' + buttonName[0].toUpperCase() + buttonName.slice(1), false);
}

export function getButtonPriority(buttonName: string): number {
	const config = getConfig();
	return config.get('priorityBase', 0) + config.get(buttonName + 'Priority', 0);
}

export function getStatusCheckInterval(): number {
	return getConfig().get('statusCheckInterval', 5000);
}

export function getLyricsServerUrl(): string {
	return getConfig().get<string>('lyricsServerUrl', '');
}
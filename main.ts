import { Console } from 'console'
import { Editor, MarkdownView, MenuItem, Plugin } from 'obsidian'

export default class DictionaryPlugin extends Plugin {
	onload(): void {
		const view = this.app.workspace.getActiveViewOfType(MarkdownView);

		this.addCommand({
			id: "add-word-to-dictionary",
			name: "Add word to dictionary",
			hotkeys: [{ modifiers: ["Ctrl", "Shift"], key: "/" }],
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const selection = editor.getSelection();
				if (editor.somethingSelected()) {
					console.log('Added to dictionary:', selection);
					console.log('Type:', typeof selection);
				}	
			}
		});

		
	}
}

import { Console } from 'console'
import { Plugin } from 'obsidian'

export default class DictionaryPlugin extends Plugin {
	onload(): void {
		// runs when plugin is run by obsidian
		this.addCommand({
			id: "add-word-to-dictionary",
			name: "Add word to dictionary",
			hotkeys: [{ modifiers: ["Ctrl", "Shift"], key: "/" }],
			callback: () => {
				const activeLeaf = this.app.workspace.activeLeaf;
				if (activeLeaf) {
					const editor = activeLeaf.view.sourceMode.cmEditor;
					const selectedText = editor.getSelection();
					console.log('Highlighted Word:', selectedText);
				}
			}
		})
	}
}

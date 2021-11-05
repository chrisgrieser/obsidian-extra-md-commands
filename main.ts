import { MarkdownView, Plugin, EditorPosition } from "obsidian";

export default class AlternativeMDSyntax extends Plugin {
  async onload() {
    this.addCommand({
      id: "underscore-bold",
      name: "Underscore Bold",
      callback: () => this.wrapSelection("__", "__"),
    });

    this.addCommand({
      id: "underscore-italics",
      name: "Underscore Italics",
      callback: () => this.wrapSelection("_","_"),
    });

    this.addCommand({
      id: "html-comment",
      name: "HTML Comment",
      callback: () => this.wrapSelection("<!--","-->"),
    });
    console.log ("Alternative MD Syntax Plugin loaded.");
  }

  async onunload() {
    console.log ("Alternative MD Syntax Plugin unloaded.");
  }

  wrapSelection(beforeStr: string, afterStr: string): void {
    //check whether active note is in editor mode
    let markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!markdownView) return;
    let editor = markdownView.editor;

    let selectedText = "";
    if (editor.somethingSelected()) selectedText = editor.getSelection();

    function Cursor(pos: number): EditorPosition {
      return editor.offsetToPos(pos);
    }

    // Detect whether the selected text is surrounded with Syntax
    // If true, unpack it, else pack with Syntax
    // ------------------------------------------------
    const sp = editor.posToOffset(editor.getCursor("from")); // Starting position
    const len = selectedText.length;
    const blen = beforeStr.length;
    const alen = afterStr.length;

    const charsBefore = editor.getRange(Cursor(sp - blen), Cursor(sp));
    const charsAfter = editor.getRange(Cursor(sp + len), Cursor(sp + len + alen));

    const firstChars = editor.getRange(Cursor(sp), Cursor(sp + blen));
    const lastChars = editor.getRange(Cursor(sp + len - alen), Cursor(sp + len));

   // Undo surrounding Syntax (outside selection)
    if (charsBefore == beforeStr && charsAfter == afterStr) {
      editor.setSelection(Cursor(sp - blen), Cursor(sp + len + alen));
      editor.replaceSelection(selectedText);
      editor.setSelection(Cursor(sp - blen), Cursor(sp + len - alen));

   // Undo surrounding Syntax (inside selection)
    } else if (firstChars == beforeStr && lastChars == afterStr) {
      editor.replaceSelection(selectedText.slice(blen,-alen));
      editor.setSelection(Cursor(sp), Cursor(sp + len - (blen + alen)));

   // Wrap Syntax around Selection
    } else {
      if (selectedText) {
        editor.replaceSelection(beforeStr + selectedText + afterStr);
        editor.setSelection(Cursor(sp + blen), Cursor(sp + len + alen));
  // No Selection
      } else {
        editor.replaceSelection(beforeStr + afterStr);
        let cursor = editor.getCursor();
        cursor.ch -= alen;
        editor.setCursor(cursor);
      }
    }


  }
}

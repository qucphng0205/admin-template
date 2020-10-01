import { Editor, Transforms } from "slate";
import { ReactEditor } from "slate-react";
const LIST_TYPES = ['numbered-list', 'bulleted-list']

const TextEditorUtils = {

  isMarkActive(editor, format) {
    //get the marks that would be added to the selection text
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  },

  toggleMark(editor, format) {
    ReactEditor.focus(editor);
    const active = this.isMarkActive(editor, format);
    if (active) Editor.removeMark(editor, format);
    else
      Editor.addMark(editor, format, true);
  },

  isBlockActive(editor, format) {
    const [match] = Editor.nodes(editor, { match: n => n.type === format });
    return !!match;
  },

  isBlockStyleActive(editor, style) {
    const [match] = Editor.nodes(editor, { match: n => n.style === style });
    return !!match;
  },

  toggleBlock(editor, format) {
    ReactEditor.focus(editor);
    const isActive = this.isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, { match: n => LIST_TYPES.includes(n.type), split: true });
    Transforms.setNodes(editor, { type: isActive ? 'paragraph' : isList ? 'list-item' : format });

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
    }
  },

  ToggleBlockStyle(editor, style) {
    ReactEditor.focus(editor);
    Transforms.setNodes(editor, { style: style});
  }
}

/*
  const isActive = this.isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
      match: n => LIST_TYPES.includes(n.type),
      split: true,
    })

    Transforms.setNodes(editor, {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    })

    if (!isActive && isList) {
      const block = { type: format, children: [] }
      Transforms.wrapNodes(editor, block)
    }
*/

export default TextEditorUtils;
import React, { useState, useMemo, useCallback } from 'react';
import { createEditor, Node } from 'slate';
import { Slate, Editable, withReact } from "slate-react";

import MarkButton from './MarkButton';
import BlockButton from './BlockButton';

import { BsCodeSlash, BsFillChatSquareQuoteFill, BsTypeBold, BsTypeItalic, BsTypeUnderline } from 'react-icons/bs';
import { MdFormatListBulleted, MdFormatListNumbered } from 'react-icons/md';
import { AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight } from 'react-icons/ai';

import styles from './ph-text-editor.module.scss';

import TextEditorUtils from './TextEditorUtils';

import { Dropdown, DropdownItem } from '../../../../components/dropdown/Dropdown';
import SlateDropdrown from './SlateDropdown';
import BlockStyleButton from './BlockStyleButton';
import { Button } from '../../../../components/button/Button';

const PhTextEditor = ({ content, onSave }) => {

  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState(
    (content != '') ? JSON.parse(content) : [
      {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
      },]
  );

  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])

  const onValueChange = (newValue) => {
    setValue(newValue);
  }
  return < div className={styles.textEditor} >
    <Slate editor={editor} value={value} onChange={onValueChange}>

      <div className={styles.toolBar}>

        <div className={styles.toolBarItem}>
          <SlateDropdrown render={(state) => {
            return (<Dropdown initialTitle={state} >
              <DropdownItem name='Paragraph'><BlockButton format='paragraph' text='Paragraph' /></DropdownItem>
              <DropdownItem name='Headline 1'><BlockButton format='heading-one' text='Heading 1' /></DropdownItem>
              <DropdownItem name='Headline 2'><BlockButton format='heading-two' text='Heading 2' /></DropdownItem>
              <DropdownItem name='Headline 3'><BlockButton format='heading-three' text='Heading 3' /></DropdownItem>
            </Dropdown>);
          }} />
        </div>

        <div className={styles.toolBarItem}>
          <MarkButton format='bold' icon={BsTypeBold} />
          <MarkButton format='italic' icon={BsTypeItalic} />
          <MarkButton format='underline' icon={BsTypeUnderline} />
          <MarkButton format='code' icon={BsCodeSlash} />
        </div>

        <div className={styles.toolBarItem}>
          <BlockButton format='block-quote' icon={BsFillChatSquareQuoteFill} />
          <BlockButton format='numbered-list' icon={MdFormatListNumbered} />
          <BlockButton format='bulleted-list' icon={MdFormatListBulleted} />
        </div>

        <div className={styles.toolBarItem}>
          <BlockStyleButton blockStyle='align-left' icon={AiOutlineAlignLeft} />
          <BlockStyleButton blockStyle='align-center' icon={AiOutlineAlignCenter} />
          <BlockStyleButton blockStyle='align-right' icon={AiOutlineAlignRight} />
        </div>

        <div className={styles.toolBarItem}>
          <Button onClick={() => onSave(JSON.stringify(value))} variant='primary'>Save</Button>
        </div>

      </div>

      <div className={styles.editorField}>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown=
          {
            event => {
              if (!event.ctrlKey)
                return;
              switch (event.key) {
                case '`': {
                  event.preventDefault();
                  TextEditorUtils.toggleBlock(editor, 'code');
                  break;
                }
                case 'b': {
                  event.preventDefault();
                  TextEditorUtils.toggleMark(editor, 'bold');
                  break;
                }
                case 'i': {
                  event.preventDefault();
                  TextEditorUtils.toggleMark(editor, 'italic');
                  break;
                }
                case 'u': {
                  event.preventDefault();
                  TextEditorUtils.toggleMark(editor, 'underline');
                  break;
                }
              }
            }
          } />
      </div>
    </Slate>
  </div >
}

const Element = ({ attributes, children, element }) => {
  let style = {};
  switch (element.style) {
    case 'align-left':
      style = {};
      break;
    case 'align-right':
      style = { textAlign: 'right' };
      break;
    case 'align-center':
      style = { textAlign: 'center' };
      break;
  }

  switch (element.type) {
    case 'code':
      return (
        <pre style={style} {...attributes}>
          <code>{children}</code>
        </pre>
      );

    case 'block-quote':
      return <blockquote style={style} {...attributes}>{children}</blockquote>

    case 'heading-one':
      return <h1 style={style} {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 style={style} {...attributes}>{children}</h2>
    case 'heading-three':
      return <h3 style={style} {...attributes}>{children}</h3>

    case 'list-item':
      return <li style={style} {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol style={style, { paddingInlineStart: '4rem' }} {...attributes}>{children}</ol>
    case 'bulleted-list':
      return <ul style={style, { paddingInlineStart: '4rem' }} {...attributes}>{children}</ul>
    default: return <p style={style} {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, leaf, children }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

export default PhTextEditor;
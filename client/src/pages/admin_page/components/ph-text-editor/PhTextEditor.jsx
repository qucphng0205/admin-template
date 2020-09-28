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

import Html from "slate-html-serializer";

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
              <DropdownItem name='Paragraph'><BlockButton format={BLOCK_TAGS.p} text='Paragraph' /></DropdownItem>
              <DropdownItem name='Headline 1'><BlockButton format={BLOCK_TAGS.h1} text='Heading 1' /></DropdownItem>
              <DropdownItem name='Headline 2'><BlockButton format={BLOCK_TAGS.h2} text='Heading 2' /></DropdownItem>
              <DropdownItem name='Headline 3'><BlockButton format={BLOCK_TAGS.h3} text='Heading 3' /></DropdownItem>
            </Dropdown>);
          }} />
        </div>

        <div className={styles.toolBarItem}>
          <MarkButton format={MARK_TAGS.strong} icon={BsTypeBold} />
          <MarkButton format={MARK_TAGS.em} icon={BsTypeItalic} />
          <MarkButton format={MARK_TAGS.u} icon={BsTypeUnderline} />
          <MarkButton format={MARK_TAGS.code} icon={BsCodeSlash} />
        </div>

        <div className={styles.toolBarItem}>
          <BlockButton format='block-quote' icon={BsFillChatSquareQuoteFill} />
          <BlockButton format='numbered-list' icon={MdFormatListNumbered} />
          <BlockButton format='bulleted-list' icon={MdFormatListBulleted} />
        </div>

        <div className={styles.toolBarItem}>
          <BlockStyleButton blockStyle={BLOCK_STYLE_TAGS.alignLeft} icon={AiOutlineAlignLeft} />
          <BlockStyleButton blockStyle={BLOCK_STYLE_TAGS.alignCenter} icon={AiOutlineAlignCenter} />
          <BlockStyleButton blockStyle={BLOCK_STYLE_TAGS.alignRight} icon={AiOutlineAlignRight} />
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

const BLOCK_TAGS = {
  p: 'paragraph',
  li: 'list-item',
  ul: 'bulleted-list',
  ol: 'numbered-list',
  quote: 'quote',
  pre: 'code',
  h1: 'heading-one',
  h2: 'heading-two',
  h3: 'heading-three',
}

const BLOCK_STYLE_TAGS = {
  alignLeft: 'align-left',
  alignRight: 'align-right',
  alignCenter: 'align-center',
}

const MARK_TAGS = {
  strong: 'bold',
  em: 'italic',
  u: 'underline',
  s: 'strikethrough',
  code: 'code',
}

const Element = ({ attributes, children, element }) => {
  let style = {};
  switch (element.style) {
    case BLOCK_STYLE_TAGS.alignLeft:
      style = {};
      break;
    case BLOCK_STYLE_TAGS.alignRight:
      style = { textAlign: 'right' };
      break;
    case BLOCK_STYLE_TAGS.alignCenter:
      style = { textAlign: 'center' };
      break;
  }

  switch (element.type) {
    case BLOCK_TAGS.pre:
      return (
        <pre style={style} {...attributes}>
          <code>{children}</code>
        </pre>
      );

    case BLOCK_TAGS.quote:
      return <blockquote style={style} {...attributes}>{children}</blockquote>

    case BLOCK_TAGS.h1:
      return <h1 style={style} {...attributes}>{children}</h1>
    case BLOCK_TAGS.h2:
      return <h2 style={style} {...attributes}>{children}</h2>
    case BLOCK_TAGS.h3:
      return <h3 style={style} {...attributes}>{children}</h3>

    case BLOCK_TAGS.li:
      return <li style={style} {...attributes}>{children}</li>
    case BLOCK_TAGS.ol:
      return <ol style={style, { paddingInlineStart: '4rem' }} {...attributes}>{children}</ol>
    case BLOCK_TAGS.ul:
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

const RULES = [
  {
    deserialize(el, next) {
      const block = BLOCK_TAGS[el.tagName.toLowerCase()];
      if (block) {
        return {
          object: 'block',
          type: block,
          data: {
            className: el.getAttribute('class'),
          },
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'block')
        switch (obj.type) {
          case (BLOCK_TAGS.p):
            return <p className={obj.data.get('className')}>{children}</p>
          case (BLOCK_TAGS.h1):
            return <h1 className={obj.data.get('className')}>{children}</h1>
          case (BLOCK_TAGS.h2):
            return <h2 className={obj.data.get('className')}>{children}</h2>
          case (BLOCK_TAGS.h3):
            return <h3 className={obj.data.get('className')}>{children}</h3>
        }
    }
  },
  {
    deserialze(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: 'mark',
          type: type,
          nodes: next(el.childNodes),
        }
      }
    },

    serialize(obj, children) {
      if (obj.object == 'mark') {
        switch (obj.type) {
          case MARK_TAGS.strong:
            return <strong>{children}</strong>
          case MARK_TAGS.em:
            return <em>{children}</em>
          case MARK_TAGS.u:
            return <u>{children}</u>
        }
      }
    }
  }
];
const html = new Html({ rules });

export default PhTextEditor;

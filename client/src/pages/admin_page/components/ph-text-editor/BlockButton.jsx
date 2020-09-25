import React from 'react';
import { useSlate } from 'slate-react';
import { Button } from '../../../../components/button/Button';
import TextEditorUtils from './TextEditorUtils';

const BlockButton = ({ format, icon, text }) => {
  const editor = useSlate();
  const Icon = icon;
  const isActive = TextEditorUtils.isBlockActive(editor, format);
  const textStyle = {
    color: (isActive) ? 'var(--color-primary)' : 'var(--color-dark)',
  }

  return (
    <Button variant='transparent'
      onClick={event => { event.preventDefault(); TextEditorUtils.toggleBlock(editor, format); }}
      style={textStyle}
      active={isActive}
    >
      {(icon != null) && <Icon size='2rem' color={isActive ? 'var(--color-primary)' : 'var(--color-dark)'} />}
      { (text != null) && text}
    </Button>
  );
}

export default BlockButton; 
import React from 'react';
import { useSlate } from 'slate-react';
import { Button } from '../../../../components/button/Button';
import TextEditorUtils from './TextEditorUtils';

const MarkButton = ({ format, icon, text }) => {
  const editor = useSlate();
  const Icon = icon;
  const isActive = TextEditorUtils.isMarkActive(editor, format);

  return (
    <Button onClick={event => { event.preventDefault(); TextEditorUtils.toggleMark(editor, format); }} active={isActive}>
      {(icon != null) && <Icon size='2rem' color={isActive ? 'var(--color-primary)' : 'var(--color-dark-1)'} />}
      {(text != null) && text}
    </Button>
  );
}

export default MarkButton;
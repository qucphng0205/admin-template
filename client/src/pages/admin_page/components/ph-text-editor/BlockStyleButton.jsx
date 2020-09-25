import React from 'react';
import { useSlate } from 'slate-react';
import { Button } from '../../../../components/button/Button';
import TextEditorUtils from './TextEditorUtils';

const BlockStyleButton = ({ icon, text, blockStyle }) => {
  const editor = useSlate();
  const Icon = icon;
  const isActive = TextEditorUtils.isBlockStyleActive(editor, blockStyle);
  const textStyle = {
    color: (isActive) ? 'var(--color-primary)' : 'var(--color-dark)',
  }

  return (
    <Button variant='transparent'
      onClick={event => { event.preventDefault(); TextEditorUtils.ToggleBlockStyle(editor, blockStyle); }}
      style={textStyle}
      active={isActive}
    >
      {(icon != null) && <Icon size='2rem' color={isActive ? 'var(--color-primary)' : 'var(--color-dark)'} />}
      { (text != null) && text}
    </Button>
  );
}

BlockStyleButton.defaultProps = {
  blockStyle: '',
}

export default BlockStyleButton; 
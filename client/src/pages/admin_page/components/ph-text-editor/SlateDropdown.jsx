import React from 'react';
import { useSlate } from 'slate-react';
import TextEditorUtils from './TextEditorUtils';

const Paragraph = 'Paragraph';
const HeadlineOne = 'Heading 1';
const HeadlineTwo = 'Heading 2';
const HeadlineThree = 'Heading 3';

const findInitialState = (editor) => {
  return TextEditorUtils.isBlockActive(editor, 'paragraph') ?
    Paragraph : TextEditorUtils.isBlockActive(editor, 'heading-one') ?
      HeadlineOne : TextEditorUtils.isBlockActive(editor, 'heading-two') ?
        HeadlineTwo : TextEditorUtils.isBlockActive(editor, 'heading-three') ?
          HeadlineThree : Paragraph;
}

const SlateDropdrown = ({ render }) => {
  const editor = useSlate();
  const Dropdown = React.useMemo(() => render(findInitialState(editor)), [findInitialState(editor)]);
  return Dropdown;
}

export default SlateDropdrown;
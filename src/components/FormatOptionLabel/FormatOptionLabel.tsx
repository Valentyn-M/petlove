import Highlighter from 'react-highlight-words';
import s from './NoticesFiltersSelect.module.scss';

export interface FormatOptionLabelProps {
  label: string;
  searchValue: string;
}

const FormatOptionLabel = ({ label, searchValue }: FormatOptionLabelProps) => {
  return (
    <Highlighter
      highlightClassName={s.highlight}
      searchWords={[searchValue]}
      autoEscape={true}
      textToHighlight={label}
    />
  );
};

export default FormatOptionLabel;

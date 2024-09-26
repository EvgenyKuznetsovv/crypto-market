export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

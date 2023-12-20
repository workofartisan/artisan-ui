export type SelectFieldOptionKey = string;

export interface SelectFieldOption {
  key: SelectFieldOptionKey;
  label: string;
  subText?: string;
  data?: any;
}

interface SharedProps {
  options: Array<SelectFieldOption>;
  label?: string;
  helpText?: string;
  required?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

export interface SingleSelectFieldProps extends SharedProps {
  currentValue: SelectFieldOptionKey;
  onChange: (newValue: SelectFieldOptionKey, data?: any) => void;
}

export interface MultiSelectFieldProps extends SharedProps {
  currentValues: Array<SelectFieldOptionKey>;
  onChange: (newValues: Array<SelectFieldOptionKey>, data?: Array<any>) => void;
}

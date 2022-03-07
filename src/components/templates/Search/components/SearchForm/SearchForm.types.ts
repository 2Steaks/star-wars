/** @format */

export type SearchFormData = {
  name: string;
};

export type SearchFormProps = {
  disabled: boolean;
  onSubmit: (data: SearchFormData) => void;
};

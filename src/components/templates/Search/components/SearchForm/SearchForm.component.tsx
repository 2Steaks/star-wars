/** @format */

import type { SearchFormData, SearchFormProps } from './SearchForm.types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ButtonType, ButtonVariant, Flex } from '@project/components';
import { SearchFormButton, SearchFormInput } from './SearchForm.styles';

export const SearchForm = ({ disabled, onSubmit }: SearchFormProps) => {
  const { control, handleSubmit } = useForm<SearchFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex>
        <SearchFormInput
          control={control}
          disabled={disabled}
          data-testid="search-form-input"
          name="name"
          placeholder="Enter name..."
        />
        <SearchFormButton
          disabled={disabled}
          data-testid="search-form-submit"
          type={ButtonType.SUBMIT}
          variant={ButtonVariant.FILLED}
        >
          Search
        </SearchFormButton>
      </Flex>
    </form>
  );
};

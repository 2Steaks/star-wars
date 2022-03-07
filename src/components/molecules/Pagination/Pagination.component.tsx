/** @format */

import type { PaginationProps } from './Pagination.types';
import React from 'react';
import { sizes } from '@project/theme';
import { Button, Flex, FlexCross, FlexMain } from '@project/components/atoms';
import { PageNumber } from './Pagination.styles';

export const Pagination = ({
  'data-testid': dataTestId = 'pagination',
  disabled,
  onChange,
  pageCount = 0,
  pageNumber = 1,
  ...props
}: PaginationProps) => {
  function isDisabled(num: number) {
    return disabled || pageCount === 0 || pageNumber === num;
  }

  function handlePrevPage() {
    onChange(pageNumber - 1);
  }

  function handleNextPage() {
    onChange(pageNumber + 1);
  }

  return (
    <Flex
      data-testid={dataTestId}
      gap={sizes.size5}
      main={FlexMain.CENTER}
      cross={FlexCross.CENTER}
      {...props}
    >
      <Button disabled={isDisabled(1)} onClick={handlePrevPage}>
        Prev
      </Button>
      <PageNumber>{pageNumber}</PageNumber>
      <Button disabled={isDisabled(pageCount)} onClick={handleNextPage}>
        Next
      </Button>
    </Flex>
  );
};

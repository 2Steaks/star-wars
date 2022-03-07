/** @format */

export type PaginationProps = {
  'data-testid'?: string;
  disabled?: boolean;
  onChange: (pageNum: number) => void;
  pageCount: number;
  pageNumber: number;
};

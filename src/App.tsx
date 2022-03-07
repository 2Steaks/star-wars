/** @format */

import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { globalStyles } from '@project/theme';
import { Layout, SearchTemplate } from '@project/components';

const queryClient = new QueryClient();

function App() {
  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <SearchTemplate />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

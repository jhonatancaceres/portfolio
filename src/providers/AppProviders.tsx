import { type PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary, ErrorProvider } from '../lib/error-handler';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { config } from '../lib/config';


///*<ErrorProvider>
//<GlobalErrorBoundary>
//    {/* 2️⃣ Data & State Management */}
//<QueryClientProvider client={queryClient}>
//<ReduxProvider store={store}>
//<AuthProvider>
//{/* 3️⃣ UI & Theme */}
//<ThemeProvider>
//{/* 4️⃣ Routing */}
//          <BrowserRouter>
//{/* 5️⃣ The App itself */}
//  {children}
//</BrowserRouter>
//</ThemeProvider>
//</AuthProvider>
//</ReduxProvider>
//</QueryClientProvider>
//</GlobalErrorBoundary>
//</ErrorProvider>
//*/}

export const AppProviders = ({ children }: PropsWithChildren) => {

  return (
    <ErrorProvider>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter basename={config.isDevelopment ? "" : "/portfolio"}>
            {children}
          </BrowserRouter>
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </QueryClientProvider>
      </ErrorBoundary>
    </ErrorProvider>
  );
};

export default AppProviders;
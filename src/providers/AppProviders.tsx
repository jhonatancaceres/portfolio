import { type PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary, ErrorProvider } from '../lib/error-handler';

//import { ErrorBoundary } from "react-error-boundary";

//import { ErrorProvider, GlobalErrorBoundary } from '../lib/error-handler';

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
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </ErrorBoundary>
    </ErrorProvider>
  );
};

export default AppProviders;
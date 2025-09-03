import AppProviders from './providers/AppProviders';

import AppRoutes from './AppRoutes';
import { Layout } from './components/ui/Layout';

export default function App() {
  return (
    <AppProviders>
      <Layout>
        <AppRoutes />
      </Layout>
    </AppProviders>
  )
}

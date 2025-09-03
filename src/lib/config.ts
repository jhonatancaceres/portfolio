// lib/config.ts
export const config = {
  api: {
    url: import.meta.env.VITE_API_URL || '/api',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '10000'),
  },
  app: {
    name: import.meta.env.VITE_APP_NAME || 'My React App',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    env: import.meta.env.MODE || 'development',
  },
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

// Optional: Validation function
export const validateEnv = () => {
  const requiredVars = ['VITE_API_URL'];
  const missingVars = requiredVars.filter(varName => !import.meta.env[varName]);

  if (missingVars.length > 0 && import.meta.env.PROD) {
    console.warn('Missing environment variables:', missingVars);
  }
};

// Call validation on import
validateEnv();
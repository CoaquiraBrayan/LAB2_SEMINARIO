export const colorTokens = {
  primary: '#1976d2',
  primaryLight: '#42a5f5',
  primaryDark: '#1565c0',
  secondary: '#9c27b0',
  secondaryLight: '#ba68c8',
  secondaryDark: '#7b1fa2',
  success: '#2e7d32',
  warning: '#ed6c02',
  error: '#d32f2f',
  info: '#0288d1',
  background: '#ffffff',
  surface: '#f5f5f5',
  textPrimary: '#212121',
  // TODO(tokens): agregar más colores aquí
} as const;

export type ColorToken = keyof typeof colorTokens;

import {extendTheme} from 'native-base';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

const colors = {
  light: {
    background: '#FFFFFF',
    text: '#1F2937',
    primary: '#3B82F6',
    secondary: '#6B7280',
    success: '#10B981',
    danger: '#EF4444',
    warning: '#F59E0B',
    info: '#6EE7B7',
    error: '#B91C1C',
    disabled: '#D1D5DB',
    highlight: '#FDE047',
  },
  dark: {
    background: '#111827',
    text: '#F9FAFB',
    primary: '#60A5FA',
    secondary: '#9CA3AF',
    success: '#22C55E',
    danger: '#DC2626',
    warning: '#F97316',
    info: '#4ADEDE',
    error: '#F87171',
    disabled: '#4B5563',
    highlight: '#FBBF24',
  },
};

const sizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
};

const fonts = {
  body: 'Roboto, sans-serif',
  heading: 'Montserrat, sans-serif',
  mono: 'Fira Code, monospace',
};

const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const theme = extendTheme({
  config,
  colors,
  sizes,
  fonts,
  fontWeights,
});

export default theme;

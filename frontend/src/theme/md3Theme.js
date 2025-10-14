import { createTheme } from '@mui/material/styles';

// JetBrains-inspired color palette with Material Design 3 Expressive
const jetbrainsColors = {
  primary: '#7B61FF', // JetBrains purple/violet
  primaryDark: '#5E47CC',
  primaryLight: '#9D88FF',
  secondary: '#FF6B9D', // Pink accent
  secondaryDark: '#CC567E',
  background: {
    dark: '#0D0D0D',
    darker: '#080808',
    paper: '#1A1A1A',
    elevated: '#242424',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B8B8B8',
    disabled: '#6B6B6B',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #7B61FF 0%, #FF6B9D 100%)',
    secondary: 'linear-gradient(135deg, #5E47CC 0%, #7B61FF 100%)',
    surface: 'linear-gradient(180deg, rgba(123, 97, 255, 0.08) 0%, transparent 100%)',
  },
};

// Material Design 3 Expressive Theme
const md3Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: jetbrainsColors.primary,
      dark: jetbrainsColors.primaryDark,
      light: jetbrainsColors.primaryLight,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: jetbrainsColors.secondary,
      dark: jetbrainsColors.secondaryDark,
      contrastText: '#FFFFFF',
    },
    background: {
      default: jetbrainsColors.background.dark,
      paper: jetbrainsColors.background.paper,
    },
    text: {
      primary: jetbrainsColors.text.primary,
      secondary: jetbrainsColors.text.secondary,
      disabled: jetbrainsColors.text.disabled,
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 16, // Rounded corners for MD3 Expressive
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(123, 97, 255, 0.1)',
    '0px 4px 8px rgba(123, 97, 255, 0.12)',
    '0px 8px 16px rgba(123, 97, 255, 0.14)',
    '0px 12px 24px rgba(123, 97, 255, 0.16)',
    '0px 16px 32px rgba(123, 97, 255, 0.18)',
    '0px 20px 40px rgba(123, 97, 255, 0.2)',
    ...Array(18).fill('0px 24px 48px rgba(123, 97, 255, 0.22)'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 8px 24px rgba(123, 97, 255, 0.3)',
          },
        },
        contained: {
          background: jetbrainsColors.gradient.primary,
          '&:hover': {
            background: jetbrainsColors.gradient.primary,
            opacity: 0.9,
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(123, 97, 255, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: jetbrainsColors.background.paper,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            border: `1px solid ${jetbrainsColors.primary}`,
            boxShadow: `0px 12px 32px rgba(123, 97, 255, 0.2)`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
          fontWeight: 500,
          fontSize: '0.875rem',
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        filled: {
          backgroundColor: 'rgba(123, 97, 255, 0.12)',
          color: jetbrainsColors.primaryLight,
          border: '1px solid rgba(123, 97, 255, 0.3)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
        },
      },
    },
  },
});

export { md3Theme, jetbrainsColors };

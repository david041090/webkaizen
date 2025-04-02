export const theme = {
  colors: {
    primary: {
      50: 'var(--primary-50)',
      100: 'var(--primary-100)',
      600: 'var(--primary-600)',
      700: 'var(--primary-700)',
      800: 'var(--primary-800)'
    },
    secondary: {
      200: 'var(--secondary-200)',
      500: 'var(--secondary-500)'
    },
    complemento: {
      500: 'var(--complemento-500)',
      600: 'var(--complemento-600)'
    }
  },
  typography: {
    heading: {
      2: 'text-2xl font-bold',
      3: 'text-xl font-bold',
      4: 'text-lg font-bold',
      5: 'text-base font-bold'
    },
    body: {
      sm: 'text-sm',
      default: 'text-base',
      lg: 'text-lg'
    }
  },
  spacing: {
    container: 'px-4 py-8 sm:py-12',
    item: 'mb-8 sm:mb-12'
  },
  borderRadius: {
    default: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl'
  },
  shadows: {
    sm: 'shadow-sm',
    default: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    custom: 'shadow-[0_4px_12px_rgba(0,0,0,0.1)]'
  },
  transitions: {
    default: 'transition-all duration-300'
  }
}; 
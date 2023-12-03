/** @type {import('tailwindcss').Config} */
// use hexa code for adding/extending colors

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './helpers/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem'
      }
    },
    extend: {
      keyframes: {
        stripes: {
          '0%': {
            backgroundPosition: '0 0'
          },
          '100%': {
            backgroundPosition: '160px 0'
          }
        }
      },
      colors: {
        brand: {
          DEFAULT: '#2C67FF',
          secondary: '#1A3AA1',
          light: '#2C67FF33'
        },
        white: {
          DEFAULT: '#FFF',
          light: '#FBFAFF'
        },
        bar: {
          blue: '#021457',
          orange: '#f25100',
          purple: '#8532a8'
        },
        yellow: {
          DEFAULT: '#FFAB00',
          light: '#FFF1D4'
        },
        red: {
          DEFAULT: '#FE475B',
          light: '#FFDADE'
        },
        green: {
          DEFAULT: '#0CAA1B',
          light: '#DAF2DC',
          soft: 'rgba(12, 170, 27, 0.05)'
        },
        blue: {
          DEFAULT: '#44A9F1',
          light: {
            DEFAULT: '#E3F2FD',
            800: '#C0CCEA'
          },
          soft: '#EDECFE'
        },
        gray: {
          DEFAULT: '#F3F4F8',
          blues: '#EDECFE',
          deep: '#8F99AD',
          light: '#EEF0F3'
        },
        border: {
          DEFAULT: '#8D91A5',
          light: '#D8E0ED'
        },
        orange: {
          DEFAULT: '#FF834D',
          light: '#FF834D40',
          soft: 'rgba(255, 133, 45, 0.05)'
        },
        seagreen: {
          DEFAULT: '#00B8D9',
          light: '#00B8D933'
        },
        dark: '#21214E',
        regular: '#5C5D76',
        disabled: '#F8F9FB',
        perple: '#5A49B4',
        meganta: '#B43490',
        brown: '#9B6546',
        deepblue: '#2B82B4',
        strokeColor: '#74777B'
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800'
      },
      fontSize: {
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        32: '32px'
      },
      placeholderColor: {
        gray: '#D8E0ED'
      },
      borderColor: {
        gray: '#D8E0ED'
      },
      width: {
        540: '540px',
        265: '265px',
        7.2: '34px',
        307: '307px',
        292: '292px'
      },
      height: {
        590: '590px',
        7.2: '34px'
      },
      boxShadow: {
        'box-shadow': '0px 0px 15px 0px rgba(0, 0, 0, 0.06)'
      }
    },
    corePlugins: {
      preflight: false
    }
  }
};

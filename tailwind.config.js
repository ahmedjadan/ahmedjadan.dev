module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}", './src/Layout/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo'],
        Inter: ['Inter'],
        Roboto: ['Roboto'],
      },
      boxShadow: {
        mdb: '0px 20px  hsla(0,0%,100%,0.1)',
        indigo:
          '0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: { color: theme('colors.pink.500') },
            'code p:first-of-type::before': false,
            'code p:last-of-type::after': false,
          },
        },
      }),
      //images
      backgroundImage: (theme) => ({
        'blog-pattern': "url('/static/blogging.svg')",
        'project-pattern': "url('/static/cv.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },

  plugins: [require('@tailwindcss/typography'),],
};

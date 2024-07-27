module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      backgroundImage:theme =>({
        'mobile-app': 'url(https://cdn.getir.com/getirweb-images/common/illustration/doodle.png)'
      }),
      spacing:{
        '0.1' : '1px'
      },
      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7',
        'brand-yellow': '#ffd300'
      }
    },
  },
  plugins: [],
}


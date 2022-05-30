module.exports = {
  purge: [
    './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontFamily: {
        'sf-bl':   ['SF-Black'],
        'sf-b':    ['SF-Bold'],
        'sf-eb':   ['SF-Heavy'],
        'sf-eb':   ['SF-Thin'],
        'sf-el':   ['SF-Ultralight'],
        'sf-l':    ['SF-Light'],
        'sf-m':    ['SF-Medium'],
        'sf-r':    ['SF-Regular'],
        'sf-sb':   ['SF-Semibold'],

        'i-eb':   ['Inter-ExtraBold'],
        'i-sb':   ['Inter-SemiBold'],
        'i-b':    ['Inter-Bold'],
        'i-r':    ['Inter-Regular'],
      },
      colors: {
        'gray-main' : '#303030',
        'gray-promote' : '#C4C4C4',
        'gray-un' : '#BEBEBE',
        'gray-ddd' : '#D2D2D2',
        'gray-back' : '#F9F9F9',
        'red-main' : '#E13131',
        'gray-one' : '#1D1E22',
        'gray-two' : '#242529',
        'gray-three' : '#323337',
        'indigo-one' : '#7289D9',
        'red-one' : '#DF393D',
        'white-gray' : '#E1E1E1',
        'white-main' : '#F5F5F5',
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

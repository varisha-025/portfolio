module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: { 
    screens: {
      
      'sm': {'min': '350px', 'max': '767px'},
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {},
  },
  plugins: [],
};

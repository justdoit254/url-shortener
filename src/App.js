import React from 'react'; 
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.styles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Main from './components/Main';
import Footer from './components/Footer';

const theme = {
  colors: {
    black: "black",
    white: "white",
    cyan: "hsl(180, 66%, 49%)",
    darkViolet: "hsl(257, 27%, 26%)",
    red: "hsl(0, 87%, 67%)",
    gray: "hsl(0, 0%, 75%)",
    grayishViolet: "hsl(257, 7%, 63%)",
    veryDarkBlue: "hsl(255, 11%, 22%)",
    veryDarkViolet: "hsl(260, 8%, 14%)"
  },
  mobile: '375px',
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}



export default App;

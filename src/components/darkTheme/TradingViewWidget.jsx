import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Button, Box, useColorMode, Spacer } from '@chakra-ui/react'


const TradingViewWidget = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;

    script.innerHTML = `
      {
        "width": "100%",
        "height": 523,
        "defaultColumn": "overview",
        "defaultScreen": "most_capitalized",
        "market": "vietnam",
        "showToolbar": true,
        "colorTheme": "dark",
        "locale": "vi_VN"
      }
    `;

    document.getElementById('tradingview-container101').appendChild(script);

    // return () => {
    //   document.getElementById('tradingview-container101').removeChild(script);
    // };
  }, []);

  return (
    <>
      <Helmet>
        <script src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js" type="text/javascript" async></script>
      </Helmet>
      <div className="tradingview-widget-container">
        <div id="tradingview-container101" className="tradingview-widget-container__widget"></div>
      </div>
    </>
  );
};

export default TradingViewWidget;

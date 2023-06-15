import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Button, Box, useColorMode, Spacer } from '@chakra-ui/react'


const TickerTape = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;

    script.innerHTML = `
    {
      "symbols": [
        {
          "description": "",
          "proName": "UPCOM:BSR"
        },
        {
          "description": "",
          "proName": "UPCOM:FOX"
        },
        {
          "description": "",
          "proName": "HNX:IDC"
        },
        {
          "description": "",
          "proName": "HNX:HNXINDEX"
        },
        {
          "description": "",
          "proName": "HNX:MBS"
        }
      ],
      "showSymbolLogo": true,
      "colorTheme": "light",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "vi_VN"
    }
    `;

    // document.body.appendChild(script);
    document.querySelector(".speac").appendChild(script)

    // return () => {
    //     // document.body.removeChild(script);
    //     document.querySelector(".speac").removeChild(script)
    // };
  }, []);

  return (
    <>
      <Helmet>
        <script src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" type="text/javascript" async />
      </Helmet>
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget speac" />
      </div>
    </>
  );
};

export default TickerTape;
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Button, Box, useColorMode, Spacer } from '@chakra-ui/react'


const TradingViewEventsWidget = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
        script.async = true;

        script.innerHTML = `
    {
      "colorTheme": "light",
      "isTransparent": false,
      "width": "100%",
      "height": "600",
      "locale": "in",
      "importanceFilter": "-1,0,1",
      "currencyFilter": "VND"
    }
    `;

        // document.body.appendChild(script);
        document.querySelector(".eventWid").appendChild(script);

        // return () => {
        //     // document.body.removeChild(script);
        //     document.querySelector(".eventWid").removeChild(script);
        // };
    }, []);

    return (
        <>
            <Helmet>
                <script src="https://s3.tradingview.com/external-embedding/embed-widget-events.js" type="text/javascript" async />
            </Helmet>
            <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget eventWid" />
            </div>
        </>
    );
};

export default TradingViewEventsWidget;

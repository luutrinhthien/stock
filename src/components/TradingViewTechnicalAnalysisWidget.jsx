import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Button, Box, useColorMode, Spacer } from '@chakra-ui/react'


const TradingViewTechnicalAnalysisWidget = ({ symbol, san }) => {
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
        script.async = true;

        script.innerHTML = `
      {
        "interval": "1m",
        "width": "100%",
        "isTransparent": false,
        "height": 450,
        "symbol": "${san}:${symbol}",
        "showIntervalTabs": true,
        "locale": "vi_VN",
        "colorTheme": "light"
      }
    `;

        document.getElementById('tradingview-container2022').appendChild(script);

        // return () => {
        //     document.getElementById('tradingview-container2022').removeChild(script);
        // };
    }, []);

    return (
        <>
            <Helmet>
                <script src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" type="text/javascript" async></script>
            </Helmet>
            <div className="tradingview-widget-container">
                <div id="tradingview-container2022" className="tradingview-widget-container__widget"></div>
            </div>
        </>
    );
};

export default TradingViewTechnicalAnalysisWidget;

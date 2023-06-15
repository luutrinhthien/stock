import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Button, Box, useColorMode, Spacer } from '@chakra-ui/react'

const Financials = ({ symbol, san }) => {
    const { colorMode, toggleColorMode } = useColorMode()

    console.log("CHECK SAN: ========= ", san)

    // let theme;
    // { colorMode == 'light' ? theme = "light" : "dark" }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
        script.async = true;

        script.innerHTML = `
            {
                "colorTheme": "light",
                "isTransparent": false,
                "largeChartUrl": "",
                "displayMode": "regular",
                "width": "100%",
                "height": 830,
                "symbol": "${san}:${symbol}",
                "locale": "vi_VN"
              }
        `;


        // document.body.appendChild(script);
        document.querySelector(".finan").appendChild(script);

        // return () => {
        //     // document.body.removeChild(script);
        //     document.querySelector(".finan").removeChild(script);
        // };
    }, []);

    // useEffect(() => {
    //     console.log(document.querySelector(".finan"))
    //     document.querySelector(".finan").style.backgroundColor = "red";
    // }, [colorMode])

    return (
        <>
            <Helmet>
                <script src="https://s3.tradingview.com/external-embedding/embed-widget-financials.js" type="text/javascript" async />
            </Helmet>
            <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget finan" />
            </div>
        </>
    );
};

export default Financials;

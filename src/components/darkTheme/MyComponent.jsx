import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Button, Box, useColorMode, Spacer } from '@chakra-ui/react'


const MyComponent = ({ symbol }) => {
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.fireant.vn/Scripts/web/widgets.js';
        script.async = true;

        script.onload = () => {
            initializeQuoteWidget();
        };

        document.body.appendChild(script);

        // return () => {
        //     document.body.removeChild(script);
        // };
    }, []);

    const initializeQuoteWidget = () => {
        /* eslint-disable no-undef */
        if (window.FireAnt) {
            new FireAnt.QuoteWidget({
                "container_id": "fan-quote-655",
                "symbols": symbol,
                "locale": "vi",
                "price_line_color": "#71BDDF",
                "grid_color": "#999999",
                "label_color": "#999999",
                "width": "100%",
                "height": "300px",
            });
        }
        /* eslint-enable no-undef */
    };

    return (
        <>
            <Helmet>
                <script>
                    {`
            (${initializeQuoteWidget.toString()})();
          `}
                </script>
            </Helmet>
            <div id="fan-quote-655"></div>
        </>
    );
};

export default MyComponent;

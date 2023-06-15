import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Flex, Button, Box, useColorMode, Spacer } from '@chakra-ui/react';

const MyComponent = ({ symbol }) => {
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.fireant.vn/Scripts/web/widgets.js';
        script.async = true;

        script.onload = () => {
            initializeQuoteWidget(symbol);
        };

        document.body.appendChild(script);

        // return () => {
        //     document.body.removeChild(script);
        // };
    }, [symbol]);

    const initializeQuoteWidget = (symbol) => {
        if (window.FireAnt) {
            new window.FireAnt.QuoteWidget({
                container_id: 'fan-quote-655',
                symbols: symbol,
                locale: 'vi',
                price_line_color: '#71BDDF',
                grid_color: '#999999',
                label_color: '#999999',
                width: '100%',
                height: '300px',
            });
        }
    };

    return (
        <>
            <Helmet>
                <script>
                    {`(${initializeQuoteWidget.toString()})('${symbol}');`}
                </script>
            </Helmet>
            <div id="fan-quote-655"></div>
        </>
    );
};

export default MyComponent;

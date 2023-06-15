
import React, { useEffect, useRef } from 'react';
import { Flex, Button, Box, useColorMode, Spacer } from '@chakra-ui/react'


let tvScriptLoadingPromise;

export default function Graph() {
    const { colorMode, toggleColorMode } = useColorMode()

    const onLoadScriptRef = useRef();

    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_dba37') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        width: "100%",
                        height: 610,
                        symbol: "UPCOM:BSR",
                        timezone: "Asia/Ho_Chi_Minh",
                        theme: "dark",
                        style: "1",
                        locale: "vi_VN",
                        toolbar_bg: "#f1f3f6",
                        enable_publishing: false,
                        withdateranges: true,
                        range: "ALL",
                        hide_side_toolbar: false,
                        allow_symbol_change: true,
                        container_id: "tradingview_dba37"
                    });
                }
            }
        },
        []
    );

    return (
        <div className='tradingview-widget-container'>
            <div id='tradingview_dba37' />
        </div>
    );
}

import React, { useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MyComponent from './components/MyComponent'
import TradingViewWidget from './components/TradingViewWidget'
import TradingViewTechnicalAnalysisWidget from './components/TradingViewTechnicalAnalysisWidget'
import TradingViewEventsWidget from './components/TradingViewEventsWidget'
import Financials from './components/Financials';
import TickerTape from './components/TickerTape';
import Graph from './components/Graph';
import Overview from './components/Overview';
import { FaMoon } from 'react-icons/fa'
import { BsSun } from 'react-icons/bs'
import { Button, Flex, Box, useColorMode, Grid, Heading, useDisclosure, GridItem, Text } from '@chakra-ui/react'
// import Button from '@mui/material/Button';
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalFooter } from '@chakra-ui/react'
import TradingViewWidgetDark from './components/darkTheme/TradingViewWidget'
import TradingViewTechnicalAnalysisWidgetDark from './components/darkTheme/TradingViewTechnicalAnalysisWidget'
import TradingViewEventsWidgetDark from './components/darkTheme/TradingViewEventsWidget'
import FinancialsDark from './components/darkTheme/Financials';
import TickerTapeDark from './components/darkTheme/TickerTape';
import GraphDark from './components/darkTheme/Graph';

import Select from 'react-select'
import Footer from './components/Footer'


const App = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [modalContent, setModalContent] = React.useState(1)

  const [finan, setFinan] = React.useState("")
  const [anal, setAnal] = React.useState("")
  const [graph, setGraph] = React.useState("")
  const [finanButton, setFinanButton] = React.useState(true)
  const [analButton, setAnalButton] = React.useState(true)
  const [graphButton, setGraphButton] = React.useState(true)

  const [options, setOptions] = React.useState("")

  useEffect(() => {
    fetch('https://wifeed.vn/api/thong-tin-co-phieu/danh-sach-ma-chung-khoan')
      .then(response => response.json())
      .then(data => {
        const updatedData = data.data.map(item => {
          const { code, san, ...rest } = item;
          const updatedItem = { value: code, label: code + " (" + san + ") ", san: san };
          return updatedItem
        });

        setOptions(updatedData)

        console.log(data.data[0])
        console.log(options)
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }, [])

  return (
    <div className="App">
      <div style={{ width: "100%", margin: "auto" }}>
        {colorMode === "light" ? <TickerTape /> : <TickerTapeDark />}
        <Box mt={10} mb={5}>
          <Flex justifyContent={"flex-end"} mt={5}>
            <Button variant={'unstyled'} onClick={toggleColorMode}>
              {colorMode === 'light' ? <FaMoon size={24} /> : <BsSun size={24} />}
            </Button>
          </Flex>
          <Heading textAlign={'center'} mt={2} mb={10} as='h2' size='2xl'>Theo dõi thị trường chứng khoán</Heading>
          <Box w={"96%"} margin={"auto"} mt={12} backgroundColor={colorMode === "light" ? 'whitesmoke' : 'blackAlpha.600'} p={4} rounded={10}>
            <Text>
              Trang web theo dõi chứng khoán là một trang web nhắm mục đích cung cấp thông tin về tình trạng chứng khoán và các chỉ số thị trường tài chính Việt Nam. Trang web sẽ được cập nhật liên tục 24/7 và hỗ trợ trên nhiều thiết bị khác nhau, người dùng sẽ được cung cấp thông tin về giá cổ phiếu, thay đổi giá, khối lượng giao dịch của các công ty, các chỉ số thị trường,
              chênh lệch tỉ giá và nhiều chỉ số tài chính khác. Sau đây là thông tin tổng quát về các thị trường (VN-INDEX, HNX-INDEX, UP-INDEX, VN30, HNX30,...) trong những ngày vừa qua. &nbsp; &nbsp;
            </Text>
            <Button mt={3} fontSize={20} color={"#6495ED"} variant={"link"} onClick={() => { onOpen(); setModalContent(5) }}>Xem tại đây</Button>
          </Box>
        </Box>

        <Box mb={10} w={"96%"} margin={"auto"} mt={12}>
          <Grid
            templateColumns='repeat(4, 1fr)'
            gap={6}
          >
            <GridItem colSpan={{ base: 4, sm: 4, md: 4, lg: 1, xl: 1, "2xl": 1 }}>
              <Box backgroundColor={colorMode === "light" ? 'whitesmoke' : 'blackAlpha.600'} borderRadius={10} p={4}>
                <Heading as='h4' size='md' mt={2} mb={5}>Dữ liệu cơ bản về công ty</Heading>
                <Select styles={{
                  option: (base) => ({
                    ...base,
                    color: 'black',
                  }),
                }} options={options} onChange={(item) => { setFinan(item); setFinanButton(false) }} />
                <Button w={"full"} mt={3} isDisabled={finanButton} onClick={() => { onOpen(); setModalContent(1) }}>Xem</Button>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 4, sm: 4, md: 4, lg: 1, xl: 1, "2xl": 1 }}>
              <Box backgroundColor={colorMode === "light" ? 'whitesmoke' : 'blackAlpha.600'} borderRadius={10} p={4}>
                <Heading as='h4' size='md' mt={2} mb={5}>Phân tích Kỹ thuật</Heading>
                <Select styles={{
                  option: (base) => ({
                    ...base,
                    color: 'black',
                  }),
                }} options={options} onChange={(item) => { setAnal(item); setAnalButton(false) }} />
                <Button w={"full"} mt={3} isDisabled={analButton} onClick={() => { onOpen(); setModalContent(2) }}>Xem</Button>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 4, sm: 4, md: 4, lg: 1, xl: 1, "2xl": 1 }}>
              <Box backgroundColor={colorMode === "light" ? 'whitesmoke' : 'blackAlpha.600'} borderRadius={10} p={4}>
                <Heading as='h4' size='md' mt={2} mb={5}>Lịch Kinh tế</Heading>
                <Select isDisabled placeholder={""} />
                <Button w={"full"} mt={3} onClick={() => { onOpen(); setModalContent(3) }}>Xem</Button>
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 4, sm: 4, md: 4, lg: 1, xl: 1, "2xl": 1 }}>
              <Box backgroundColor={colorMode === "light" ? 'whitesmoke' : 'blackAlpha.600'} borderRadius={10} p={4}>
                <Heading as='h4' size='md' mt={2} mb={5}>Biểu đồ đơn giản</Heading>
                <Select styles={{
                  option: (base) => ({
                    ...base,
                    color: 'black',
                  }),
                }} options={options} onChange={(item) => { setGraph(item); setGraphButton(false) }} />
                <Button w={"full"} mt={3} isDisabled={graphButton} onClick={() => { onOpen(); setModalContent(4) }}>Xem</Button>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        <Box w={"90%"} margin={"auto"} mt={20} >
          {colorMode === "light" ? <TradingViewWidget /> : <TradingViewWidgetDark />}
        </Box>
        <Heading textAlign={'center'} mt={20} as='h3' size='lg'>Biểu đồ Thời gian Thực Nâng cao</Heading>
        <Box w={"80%"} margin={"auto"} mt={12}>
          {colorMode === "light" ? <Graph /> : <GraphDark />}
        </Box>
      </div>

      <Footer />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {modalContent === 1 ?
            (colorMode === "light" ? <Financials symbol={finan.value || "SBR"} san={finan.san || "UPCOM"} /> : <FinancialsDark symbol={finan.value || "SBR"} san={finan.san || "UPCOM"} />) :
            (modalContent === 2 ?
              (colorMode === "light" ? <TradingViewTechnicalAnalysisWidget symbol={anal.value || "SBR"} san={anal.san || "UPCOM"} /> : <TradingViewTechnicalAnalysisWidgetDark symbol={anal.value || "SBR"} san={anal.san || "UPCOM"} />)
              : (modalContent === 3 ? (colorMode === "light" ? <TradingViewEventsWidget /> : <TradingViewEventsWidgetDark />) :
                (modalContent === 4 ? (<MyComponent symbol={graph.value || "SBR"} />) : <Overview />)))
          }
          <ModalFooter backgroundColor={colorMode === "light" ? 'whitesmoke' : 'blackAlpha.600'}>
            <Button onClick={onClose} backgroundColor={"facebook.900"} textColor={"white"}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div >
  );
};

export default App;

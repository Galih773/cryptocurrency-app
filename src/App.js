import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails  } from './components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage/>} />
              <Route path="/exchanges" element={<Exchanges/>} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
              <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
              <Route path="/news" element={<News/>} />
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/exchanges'}>Exchanges</NavLink>
            <NavLink to={'/news'}>News</NavLink>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App
import React, { useEffect, useState } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { NavLink } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../images/cryptocurrency.png'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className="nav-container">
      <div style={{justifyContent: 'space-between'}} className='logo-container'>
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className='logo'>
          <NavLink to="/">Cryptoverse</NavLink>
        </Typography.Title>
        
        {screenSize < 768 && (
          <Button 
            className="menu-controll-container" 
            onClick={()=>setActiveMenu(!activeMenu)}>
            <MenuOutlined />
          </Button>
        )}
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item key={'home'} icon={<HomeOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key={'current'} icon={<FundOutlined />}>
            <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
          </Menu.Item>
          <Menu.Item key={'ex'} icon={<MoneyCollectOutlined />}>
            <NavLink to="/exchanges">Exchanges</NavLink>
          </Menu.Item>
          <Menu.Item key={'new'} icon={<BulbOutlined />}>
            <NavLink to="/news">News</NavLink>
          </Menu.Item>
        </Menu>  
      )}
    </div>
  )
}

export default Navbar
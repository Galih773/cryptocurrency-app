import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {Col, Row, Typography} from 'antd'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title as Titles,CategoryScale } from 'chart.js';
import millify from 'millify';
const {Title} = Typography

const LineChart = ({coinHistory, currentPrice, coinName}) => {

  const coinPrice = []
  const coinTimestamp = []
  
  Chart.register(LineController, LineElement, PointElement, LinearScale, Titles, CategoryScale);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      y:{
        ticks: {
          beginAtZero: true,
        },
      },
      
    },
  };

  useEffect(() => {
    if(coinHistory?.data?.history) {
      for(let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(Number(coinHistory?.data?.history[i].price))
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
      }

      data.labels = coinTimestamp
      data.datasets[0].data = coinPrice
    }
    
  }, [coinHistory?.data?.history, coinPrice, coinTimestamp])



  if(coinHistory?.data?.history?.length === 0) return <div className="no-chart">No Chart Data Available</div>

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart</Title>

        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>

          <Title level={5} className="current-price">Current {coinName} Price: $ {millify(currentPrice)}</Title>
        </Col>
        <Line data={data} options={options} />
      </Row>
    </>
  )
}

export default LineChart
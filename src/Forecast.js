import React, { useState, useEffect } from 'react';
import {observer} from 'mobx-react';
import { searchForecast } from "./request";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';


const Forecast = ({ keywordStore }) => {
  const [forecast, setForecast] = useState('');

  const getWeatherForecast = async (keyword) => {
    const response = await searchForecast(keyword);
    setForecast(response.data);
  }

  useEffect(() => {
    keywordStore.keyword && getWeatherForecast(keywordStore.keyword);
  }, [keywordStore.keyword]);

  return (
    <div>
    {Array.isArray(forecast.list) ? (
      <div>
        {forecast.list.map(l => {
          return (
            <Card body>
              <ListGroup>
                <ListGroup.Item>Date: {l.dt_txt}</ListGroup.Item>
                <ListGroup.Item>
                  Temperature: {l.main.temp - 273.15} C
                </ListGroup.Item>
                <ListGroup.Item>
                  High: {l.main.temp_max - 273.15} C
                </ListGroup.Item>
                <ListGroup.Item>
                  Low: {l.main.temp_min - 273.15} C
                </ListGroup.Item>
                <ListGroup.Item>Pressure: {l.main.pressure} C</ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
      </div>
    ) : null}
  </div>
  );
}

export default observer(Forecast);

import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

import { requestForecast } from '~/store/modules/forecast/actions';

import { theme } from '~/theme/globalStyle';

import {
  Background,
  Container,
  SafeContainer,
  NowIn,
  LabelLocaltion,
  IconCurrentWeather,
  LabelTemp,
  LabelWeatherDescription,
} from './styles';

const Main = () => {
  const [location, setLocation] = useState(null);
  const [watchID, setWatchID] = useState(null);
  // const [locationLoading, setLocationLoading] = useState(false);
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.forecast);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        // const initialPosition = JSON.stringify(position);
        setLocation(position);
      },
      (error) => Alert.alert('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    setWatchID(
      Geolocation.watchPosition((position) => {
        // const lastPosition = JSON.stringify(position);
        setLocation(position);
      })
    );
  };

  useEffect(() => {
    getLocation();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  useEffect(() => {
    if (location) {
      console.log('location', location);
      dispatch(
        requestForecast(location.coords.latitude, location.coords.longitude)
      );
    }
  }, [location]);

  return (
    <Background colors={[theme.primary, theme.secondary]}>
      <SafeContainer>
        <Container>
          <NowIn>Agora em</NowIn>
          <LabelLocaltion>{data.city}</LabelLocaltion>
          <IconCurrentWeather />
          <LabelTemp>{`${data.temp}º`}</LabelTemp>
          <LabelWeatherDescription>{data.description}</LabelWeatherDescription>
        </Container>
      </SafeContainer>
    </Background>
  );
};

export default Main;

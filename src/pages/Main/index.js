import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import LottieView from 'lottie-react-native';

import FatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.forecast);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      (error) => Alert.alert('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    setWatchID(
      Geolocation.watchPosition((position) => {
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
      dispatch(
        requestForecast(location.coords.latitude, location.coords.longitude)
      );
    }
  }, [location]);

  return (
    // <Background colors={[theme.primary, theme.secondary]}>
    <Background colors={['#82AED9', '#A78B91', '#193D64']}>
      <SafeContainer>
        <Container>
          <NowIn>Agora em</NowIn>
          <LabelLocaltion>{data.city}</LabelLocaltion>
          <IconCurrentWeather>
            <LottieView
              source={require('../../sol-pancadas-chuva.json')}
              autoPlay
              loop
            />
          </IconCurrentWeather>
          <LabelTemp>{`${data.temp}º`}</LabelTemp>
          <LabelWeatherDescription>{data.description}</LabelWeatherDescription>
          <FatherIcon name="wind" size={30} color={theme.light} />
          <NowIn>{data.wind_speedy}</NowIn>
        </Container>
      </SafeContainer>
    </Background>
  );
};

export default Main;

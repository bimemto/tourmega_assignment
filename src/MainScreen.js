/*
  The entry screen of application
 */

import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import ActivityOverview from './components/ActivityOverviewComponent';
import Description from './components/DescriptionComponent';
import PhotoSlider from './components/PhotoSliderComponent';
import ThingsToDo from './components/ThingsToDoComponent';
import Review from './components/ReviewComponent';
import commonStyles from './styles/commonStyles';
import RelatedTours from './components/RelatedToursComponent';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from './actions';
import * as Colors from './styles/colors';
import Line from './components/LineComponent';
import TopBar from './components/TopBar';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const MainScreen = () => {
  /*
  Get necessary state from redux store using useSelector hook
   */
  const loading = useSelector((state) => (state ? state.loading : true));
  const error = useSelector((state) => (state ? state.error : null));
  const tour = useSelector((state) => (state ? state.tour : null));

  const dispatch = useDispatch();
  const tourId = 126605; //example tour id to get information

  /* make api request to get tour info when component did mount */
  useEffect(() => {
    getTourDetail();
  }, []);

  const getTourDetail = () => {
    dispatch(actions.getTourDetail(tourId));
  };

  /**
   * Conditionally render UI of main screen:
   * If api is loading, show an activity indicator
   * If api return error, show error message and retry button
   * If everything is ok, show tour information
   */
  let content;
  if (loading) {
    content = (
      <View style={styles.errorContainer}>
        <ActivityIndicator
          testID="activityIndicator"
          size="large"
          color={Colors.colorPrimary}
        />
      </View>
    );
  } else if (error) {
    content = (
      <View style={styles.errorContainer}>
        <Text style={[styles.sectionTitle, {marginBottom: 10}]}>
          {error.message}
        </Text>
        <Button title="Retry" onPress={getTourDetail} />
      </View>
    );
  } else {
    let location = '';
    if (tour.locations.length > 0) {
      location = tour.locations[0].name;
    }
    content = (
      <View style={[commonStyles.container, {paddingBottom: 34}]}>
        <ScrollView>
          <View>
            {tour.images && tour.images.length > 0 ? (
              <PhotoSlider images={tour.images} testID="slider" />
            ) : null}
            <View style={styles.sectionContainer}>
              <Text testID="tourName" style={styles.title}>
                {tour.name}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/location.png')}
                  />
                  <Text testID="location" style={styles.sectionDescription}>
                    {location}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginStart: 120,
                  }}>
                  <Image
                    resizeMode="contain"
                    source={require('../assets/images/star.png')}
                  />
                  <View style={{flexDirection: 'row'}} testID="rating">
                    <Text style={styles.sectionDescription}>
                      {tour.average_rating.toFixed(2)}
                    </Text>
                    <Text
                      style={
                        styles.lightText
                      }>{`(${tour.no_of_reviews})`}</Text>
                  </View>
                </View>
              </View>

              <Line />

              <ActivityOverview tour={tour} />

              <Line />

              <ThingsToDo tour={tour} />

              <Line />

              <Description
                includes={tour.inclusion}
                excludes={tour.exclusion}
              />

              <Line />
              {tour.reviews && tour.reviews.length > 0 ? (
                <View testID="review">
                  <Review tour={tour} />
                  <Line />
                </View>
              ) : null}

              {tour.cancellation_policy &&
              tour.cancellation_policy.length > 0 ? (
                <View testID="cancelPolicy">
                  <Text style={styles.sectionTitle}>Cancelation Policy</Text>
                  <Text style={styles.sectionDescription}>
                    {tour.cancellation_policy}
                  </Text>
                </View>
              ) : null}

              <Line />

              {tour.covid19_precautions &&
              tour.covid19_precautions.length > 0 ? (
                <View testID="covid19">
                  <TouchableOpacity>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.sectionTitle}>
                        COVID-19 Precautions
                      </Text>
                      <Icon name="chevron-right" size={24} />
                    </View>
                  </TouchableOpacity>
                  <Line />
                </View>
              ) : null}

              <RelatedTours />
            </View>
          </View>
        </ScrollView>
        <TopBar style={styles.topBar} />
      </View>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    margin: 15,
  },
  sectionDescription: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.dark,
    marginStart: 15,
  },
  lightText: {
    fontSize: 16,
    color: Colors.dark,
    opacity: 0.6,
  },
  sectionTitle: {
    ...commonStyles.sectionTitle,
    marginHorizontal: 15,
  },
  topBar: {
    position: 'absolute',
    top: getStatusBarHeight(),
    width: Dimensions.get('window').width,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default MainScreen;

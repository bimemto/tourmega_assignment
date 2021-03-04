/**
 * Component represent "You Might Also Like" section of tour detail
 */
import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import commonStyles from '../styles/commonStyles';
import RelatedToursListItem from './RelatedToursListItemComponent';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../actions';

const RelatedTours = () => {
  const dispatch = useDispatch();

  /*
    Get relatedTours state from redux store using useSelector hook
   */
  const relatedTours = useSelector((state) =>
    state ? state.relatedTours : null,
  );

  /* make api request to get related tours when component did mount */
  useEffect(() => {
    getRelatedTours();
  }, []);

  const getRelatedTours = () => {
    dispatch(actions.getRelatedTours());
  };

  const renderItem = ({item, _}) => {
    return <RelatedToursListItem relatedItem={item} />;
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: 15,
        }}
      />
    );
  };

  return (
    <View style={commonStyles.container}>
      <Text style={styles.title}>You Might Also Like</Text>
      <FlatList
        style={{marginHorizontal: 15, marginTop: 10}}
        data={relatedTours}
        horizontal
        renderItem={renderItem}
        keyExtractor={(_, index) => `key_${index}`}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    ...commonStyles.sectionTitle,
    marginHorizontal: 15,
  },
});

export default RelatedTours;

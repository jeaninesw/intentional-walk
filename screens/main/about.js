import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {Button, InfoBox, PageTitle} from '../../components';
import {Colors, GlobalStyles} from '../../styles';
import {Strings} from '../../lib';

export default function InfoScreen({navigation}) {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <ScrollView>
        <View style={GlobalStyles.content}>
          <PageTitle style={styles.title} title={Strings.common.about} />
          <View style={{flex: 1, alignSelf: 'stretch'}}>
            <InfoBox style={styles.infoBox}
                     title={Strings.about.what}
                     icon="directions-walk"
                     iconSize={80}
                     iconColor={Colors.accent.teal}>
              {Strings.about.whatText}
            </InfoBox>
            <InfoBox style={styles.infoBox}
                     title={Strings.about.dates}
                     icon="date-range"
                     iconSize={80}
                     iconColor={Colors.primary.lightGreen}>
              {Strings.about.datesText}
            </InfoBox>
            <InfoBox style={styles.infoBox}
                     title={Strings.about.prize}
                     icon="star-border"
                     iconSize={80}
                     iconColor={Colors.accent.orange}>
              {Strings.about.prizeText}
            </InfoBox>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  infoBox: {
    marginBottom: 30,
  }
});

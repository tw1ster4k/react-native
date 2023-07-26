/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Title from '../../Svg/Title/Title';
import {useSelector} from 'react-redux';
import {stylesHeaderDark} from './StylesHeaderDark';
import {stylesHeaderWhite} from './StylesHeaderWhite';
import { SvgXml } from 'react-native-svg';






const Header = () => {
  const theme = useSelector(state => state.theme);
  const uriBlack = "https://vk.com/doc346636180_666069486?hash=ggbwihP82kAjBTjhZ6He3nz6miZrJd2pwOd6xn7i7WL&dl=swGiTL5EDS1q2Wm7uH4WVtzKRznHLABRzQj7Znn7G20"
  const uriWhite = "https://vk.com/doc346636180_666296116?hash=MMIFoC355VKJBEEw6TOPRhs69NApZU4qWpIZ79KkS1g&dl=hIFNl0ZoTxR8B7MwDc5HaKtzoZhhB0mCft1n4gzdRvD"

  const xml = `<svg width="208" height="58" viewBox="0 0 208 58" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 6.22119H18.7453V11.001H11.9602V28.5647H6.78513V11.001H0V6.22119Z" fill="white"/>
  <path d="M30.6671 12.2907C30.6671 8.83863 33.4271 5.8418 37.9506 5.8418C40.8639 5.8418 43.1639 6.79018 44.5823 8.30754L41.8222 12.1389C40.8254 11.2286 40.0588 10.6215 38.4105 10.6215C36.9923 10.6215 36.149 11.2664 36.149 12.2907C36.149 16.0083 45.579 15.098 45.579 22.3812C45.579 26.2887 42.2055 28.982 37.8356 28.982C34.8071 28.982 31.2804 27.6921 30.1688 25.3023L33.1205 21.8123C34.4239 23.4435 36.3789 24.1643 37.9506 24.1643C39.2921 24.1643 40.0972 23.4815 40.0972 22.4571C40.0972 19.0811 30.6671 19.4982 30.6671 12.2907Z" fill="white"/>
  <path d="M77.7028 19.3463C77.7028 26.1744 73.2944 28.9817 68.4644 28.9817C62.6377 28.9817 58.6126 25.6814 58.6126 19.1566V6.25879H63.788V18.0945C63.788 21.5844 64.861 24.2399 68.4644 24.2399C71.608 24.2399 72.5279 21.9638 72.5279 18.3978V6.29671H77.7028V19.3463Z" fill="white"/>
  <path d="M108.102 28.6028L97.3681 15.1739V28.6028H92.5388V6.22119H96.6787L107.412 19.6881V6.22119H112.242V28.6028H108.102Z" fill="white"/>
  <path d="M134.016 6.22119H138.615L148.007 28.6028H142.487L140.609 23.8988H131.677L129.799 28.6028H124.586L134.016 6.22119ZM133.632 19.0811H138.693L136.162 12.746L133.632 19.0811Z" fill="white"/>
  <path d="M160.39 6.22119H165.603L172.579 15.629L179.173 6.22119H184.042V28.6028H178.866V14.3393L172.579 23.0642H171.851L165.603 14.453V28.6028H160.39V6.22119Z" fill="white"/>
  <path d="M199.259 11.3042H204.436V28.6025H199.259V11.3042Z" fill="white"/>
  <path d="M202.211 0L199.259 6.22129H204.397L208 0H202.211Z" fill="#FF7A00"/>
  <path d="M48.1861 43.2441H49.3365V57.8488H48.1861V43.2441ZM51.406 50.1478L58.6895 57.8488H57.1947L50.0644 50.2237L57.0027 43.2441H58.4215L51.406 50.1478Z" fill="white"/>
  <path d="M66.3565 43.2441H67.5062V57.8488H66.3565V43.2441Z" fill="white"/>
  <path d="M74.79 43.2441H86.865V44.3443H81.4219V57.8488H80.2721V44.3443H74.8287V43.2441H74.79Z" fill="white"/>
  <path d="M103.694 56.4065C102.698 57.3932 100.857 58.0001 99.1324 58.0001C94.7621 58.0001 91.7338 55.0412 91.7338 50.5265C91.7338 46.3159 94.5317 43.0537 98.9791 43.0537C100.82 43.0537 102.314 43.5088 103.464 44.4195L102.927 45.2916C101.854 44.4954 100.627 44.1538 99.0176 44.1538C95.4524 44.1538 92.9987 46.8474 92.9987 50.5648C92.9987 54.3962 95.5671 56.9758 99.2471 56.9758C100.82 56.9758 102.238 56.4448 103.272 55.6099L103.694 56.4065Z" fill="white"/>
  <path d="M121.327 50.9446H112.128V57.8488H110.977V43.2441H112.128V49.8445H121.327V43.2441H122.477V57.8488H121.327V50.9446Z" fill="white"/>
  <path d="M131.37 43.2441H139.536V44.3443H132.521V49.9203H138.923V51.0205H132.56V56.7864H139.767V57.8865H131.41V43.2441H131.37Z" fill="white"/>
  <path d="M158.933 57.8488L148.851 45.2921V57.8488H147.739V43.2441H148.659L158.741 55.8385V43.2441H159.853V57.8488H158.933Z" fill="white"/>
  </svg>
  `
  const windowWidth = Dimensions.get("window").width

  const styles = StyleSheet.create(
    theme ? stylesHeaderWhite : stylesHeaderDark,
  );

  return (
    <View
      style={windowWidth > 1080 ? [
        styles.container,
        {
          width: 393,
          height: 192,
          flexDirection: 'column',
          alignItems: 'center',
          marginLeft:"auto",
          marginRight:'auto'
        },
      ] :[
        styles.container,
        {
          width: 393,
          height: 192,
          flexDirection: 'column',
          alignItems: 'center',
        },
      ]}>
      <Title />  
  {/*       {theme ?
      <SvgUri uri={uriWhite} />
        :
      <SvgUri uri={uriBlack} />
      }   */}

     {/*  <SvgXml xml={xml}/> */}
      <Text
        style={[
          styles.text,
          {
            textAlign: 'center',
            width: 380,
            marginTop: 16,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 16.8,
          },
        ]}>
        Онлайн-меню японо-перуанской кухни ресторана Tsunami
      </Text>
    </View>
  );
};

export default Header;

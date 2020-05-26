import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import {_Card, _Container, _Text, _InputBox} from '@components';
import SearchStyles from '@search/searchStyles';
import IconSearch from 'react-native-vector-icons/EvilIcons';
import {appColors} from '@values/colors';
import searchStyles from './searchStyles';
const languagesData = [
  {
    id: 1,
    language: 'React Native',
  },
  {
    id: 2,
    language: 'JavaScript',
  },
  {
    id: 3,
    language: 'Node Js',
  },
  {
    id: 4,
    language: 'C++',
  },
  {
    id: 5,
    language: 'Python',
  },
  {
    id: 6,
    language: 'React JS',
  },
  {
    id: 7,
    language: 'Angular JS',
  },
  {
    id: 8,
    language: 'PHP',
  },
  {
    id: 9,
    language: 'Flutter',
  },
];
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      borderRadius: 32,
      dataFocus: false,
      searchedData: [],
    };
  }

  onFocus() {
    this.setState({borderRadius: 16, dataFocus: true});
  }

  setOnSelected(item) {
    this.setState({borderRadius: 32, dataFocus: false}, () => {
      this.SearchFilterFunction(item.language);
    });
  }

  showLanguage(item) {
    const {flexDir, iconStyle, textInputStyle, resultView} = searchStyles;
    return (
      <TouchableOpacity
        style={[flexDir, resultView]}
        onPress={() => this.setOnSelected(item)}>
        <IconSearch
          style={iconStyle}
          name={'clock'}
          size={25}
          color={appColors.grayColor}
        />
        <_Text style={textInputStyle}>{item.language}</_Text>
      </TouchableOpacity>
    );
  }

  SearchFilterFunction(text) {
    const newData = languagesData.filter(function(item) {
      const itemData = item.language
        ? item.language.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      searchedData: newData,
      search: text,
    });
  }

  render() {
    const {
      mainView,
      cardView,
      flexDir,
      searchView,
      iconStyle,
      textInputStyle,
    } = SearchStyles;
    const {search} = this.state;
    const {borderRadius, dataFocus, searchedData} = this.state;
    return (
      <_Container showMenu showNotification title="Search">
        <TouchableHighlight style={mainView}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <_Card style={[cardView, {borderRadius: borderRadius}]}>
              <View style={[flexDir, searchView]}>
                <IconSearch
                  style={iconStyle}
                  name={'search'}
                  size={25}
                  color={appColors.grayColor}
                />
                <_InputBox
                  style={textInputStyle}
                  fieldValue={search}
                  onChangeText={value => this.SearchFilterFunction(value)}
                  placeholder={'Search'}
                  onFocus={() => this.onFocus()}
                />
              </View>

              {dataFocus && (
                <FlatList
                  style={{marginBottom: searchedData.length == 0 ? 0 : 20}}
                  data={
                    searchedData.length == 0 && search == ''
                      ? languagesData
                      : searchedData
                  }
                  renderItem={({item}) => this.showLanguage(item)}
                  keyExtractor={item => item.id}
                  extraData={this.state}
                />
              )}
            </_Card>
          </TouchableWithoutFeedback>
        </TouchableHighlight>
      </_Container>
    );
  }
}

export default Search;

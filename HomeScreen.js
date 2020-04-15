import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity

} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import {selectData} from './store/selectors';

import { setData } from './store/actions';


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  btnSet = () => {
    this.props.setData('10')
  }

  btnGet = () => {
    this.setState({data: this.props.data})
  }

  btnSecondPage = () => {
    this.props.navigation.navigate('SecondScreen');
  }


  render(){
    return (
      <View style={styles.body}>
        <Text>{this.props.data}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.btnSet}>
          <Text style={{fontWeight: 'bold'}}>Set</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.btnGet}>
          <Text style={{fontWeight: 'bold'}}>Get</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.btnSecondPage}>
          <Text style={{fontWeight: 'bold'}}>Second Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 5,
    width:150,
    height: 40,
    backgroundColor: 'orange',
    justifyContent: "center",
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold'
  },
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee'
  }
});

const mapStateToProps = createStructuredSelector({
  data: selectData(),
});

const mapDispatchToProps = dispatch => (
  (
      bindActionCreators({
        setData
      }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

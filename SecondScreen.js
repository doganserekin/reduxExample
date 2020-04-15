import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import {selectData} from './store/selectors';

import { setData } from './store/actions';

class SecondScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.body}>
        <Text>Welcome to Second Screen</Text>
        <Text>{this.props.data}</Text>
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
    width:150,
    height: 40,
    backgroundColor: 'orange',
    justifyContent: "center",
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold'
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

export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);

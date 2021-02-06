import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => {
    const title = props.title;
    const subTitle = props.subTitle;
  return (
    <Appbar.Header style={{backgroundColor: 'white', color:"grey", borderBottomColor:"grey", borderBottomWidth:0.5}}>
      <Appbar.BackAction onPress={() => props.navigation.goBack()} />
      {title != null ? <Appbar.Content title={title} subtitle={subTitle}/> : null}
    </Appbar.Header>
  );
};



export default Header;
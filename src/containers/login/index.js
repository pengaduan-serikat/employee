import React, { Fragment } from 'react';
import {
  Text,
  Button
} from 'react-native';


const App = (props) => {
  const { navigation: { navigate } } = props;
  return (
    <Fragment>
      <Text>Ini home</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Register', { name: 'Jane' })}
      />
    </Fragment>
  );
};


export default App;

import { Feather } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Feather
      name={props.name}
      size={25}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}

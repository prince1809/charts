import React from 'react';
import BindToMixin from 'react-binding';
import _ from 'underscore';
import json from 'react-json';
import genie from 'genie';

import {TabbedArea,TabPane,Button} from 'react-bootstrap';

//import SmoothLineChartDemo from './SmoothLineChartDemo.js';


var patternOptions = [
  'firstName',
  'lastName',
  'fullName',
  'zipCode',
  'zipCode5',
  'zipCode9',
  'city'
];


var App = React.createClass({
  mixins: [BindToMixin],

  render(){
    return(<div>
      <TabbedArea bsStyle="tabs" defaultActiveKey={1}>
      HHHE
      </TabbedArea>
      </div>
    )
  }
});

React.render(<App />, document.getElementById('app'));

import React from 'react';
import faker from 'faker';
import { v4 as uuidv4} from 'uuid';

import { withLDProvider } from 'launchdarkly-react-client-sdk';
import BoolFlag from './BoolFlag';
import JsonFlag from './JsonFlag';
import StringFlag from './StringFlag';
import NumFlag from './NumFlag';



const { REACT_APP_LAUNCHDARKLY_CLIENTSIDE_ID } = process.env;

const App = () =>
  <div style={{width: "75%", margin: "auto"}}>
    <JsonFlag />
    <table className="ui celled table">
        <thead>
            <tr>
                <th>Flag Name</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Flag Name"><pre>boolflag</pre></td>
                <td data-label="Value"><pre><BoolFlag /></pre></td>
            </tr>
            <tr>
                <td data-label="Flag Name"><pre>stringflag</pre></td>
                <td data-label="Value"><pre><StringFlag /></pre></td>
            </tr>
            <tr>
                <td data-label="Flag Name"><pre>numflag</pre></td>
                <td data-label="Value"><pre><NumFlag /></pre></td>
            </tr>
        </tbody>
    </table>
  </div>;
export default withLDProvider({ 
  clientSideID: REACT_APP_LAUNCHDARKLY_CLIENTSIDE_ID,
  user: {
    key: uuidv4(),
    name: faker.name.findName(),
    email: faker.internet.email()
  },
  options: {}
})(App);



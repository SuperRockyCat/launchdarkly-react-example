import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const BoolFlag = ({ flags }) => {
  return flags.boolflag ? <div><span style={{color: "green"}}>True</span></div> : <div>False</div>;
};

export default withLDConsumer()(BoolFlag);

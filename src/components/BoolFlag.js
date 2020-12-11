import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const BoolFlag = ({ flags }) => {
  return flags.boolFlag ? <div><span style={{color: "green"}}>True</span></div> : <div><span style={{color: "red"}}>False</span></div>;
};

export default withLDConsumer()(BoolFlag);

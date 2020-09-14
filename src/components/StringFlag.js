import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const StringFlag = ({ flags }) => {
  return flags.stringflag ? <div>{flags.stringflag}</div> : <div>Flag Off</div>;
};

export default withLDConsumer()(StringFlag);

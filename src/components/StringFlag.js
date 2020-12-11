import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const StringFlag = ({ flags }) => {
  return flags.stringFlag ? <div>{flags.stringFlag}</div> : <div>Flag Off</div>;
};

export default withLDConsumer()(StringFlag);

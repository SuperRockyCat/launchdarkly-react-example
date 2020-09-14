import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const NumFlag = ({ flags }) => {
  return <div>{flags.numflag || "Not Defined"}</div>;
};

export default withLDConsumer()(NumFlag);

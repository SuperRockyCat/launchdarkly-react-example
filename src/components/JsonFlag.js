import React from 'react'
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const JsonFlag = ({ flags }) => {
  return flags.jsonFlag ? <div style={{textAlign: "center"}}><h1>{`Flag states for: ${flags.jsonFlag.firstName} ${flags.jsonFlag.lastName}`}</h1></div> : <div>Flag off</div>;
};

export default withLDConsumer()(JsonFlag);
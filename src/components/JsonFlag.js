import React from 'react'
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const JsonFlag = ({ flags }) => {
  return flags.jsonflag ? <div style={{textAlign: "center"}}><h1>{`Flag states for: ${flags.jsonflag.firstName} ${flags.jsonflag.lastName}`}</h1></div> : <div>Flag off</div>;
};

export default withLDConsumer()(JsonFlag);
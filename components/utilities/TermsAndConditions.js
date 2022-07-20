import React from 'react';
import { Text, View } from 'react-native';
const styles = require('../styling/Stylesheet');

export default function TermsAndConditions() {
  return (
    <Text style={styles.termsTextStyle}>
      Welcome to Stayflexi, a property and vacation rental management platform(
      the “Stayflexi Platform”) owned and managed by Stayflexi, Inc, a Delaware
      corporation and its subsidiaries (collectively, the “Company”,
      “Stayflexi”, “we”, “us” and/or “our”).{'\n'}
      {'\n'}These Terms and Conditions, as may be amended from time to time,
      constitute a legally binding agreement between you and us governing the
      use of all our services directly or indirectly made available online or
      through any mobile device.{'\n'}
      {'\n'}By accessing, browsing, and using our platform, you the (“Customer”)
      a.k.a (“Subscriber”) acknowledge and agree to have read, understood and
      agreed to these Terms.
    </Text>
  );
}

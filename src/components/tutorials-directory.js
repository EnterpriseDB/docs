import React from 'react';
import Attention from './attention';

const TutorialsDirectory = ({ ...otherProps }) => (
  <Attention {...otherProps}>
    For more tutorials on PostgreSQL, SQL, and other EDB-supported technologies,
    please see [the full list of tutorials](/postgresql_journey/08_tutorials)
  </Attention>
);

export default TutorialsDirectory;

import React from 'react';

import Directory from '../../components/directory/directory';

import { HomePageContainer } from './homepage.styles';

const Home = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);
// const Home = () => {
//   throw Error; // <<<==== ERROR
//   return (
//     <HomePageContainer>
//       <Directory />
//     </HomePageContainer>
//   );
// };

export default Home;

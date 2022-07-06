import React, { Profiler } from 'react';

import Directory from '../../components/directory/directory';

import { HomePageContainer } from './homepage.styles';

const Home = () => (
  <HomePageContainer>
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration,
        });
      }}
    >
      <Directory />
    </Profiler>
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

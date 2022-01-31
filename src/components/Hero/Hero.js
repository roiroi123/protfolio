import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My objective is to obtain a job within my chosen field that will challenge me and
allow me to use my education, skills and past experiences in a way
that is mutually beneficial to both myself and my employer and
allow for future growth and advancement
      </SectionText>
      <Button onClick={()=>window.location = 'mailto:royshalom911@gmail.com'}>
        Learn More
      </Button>
    </LeftSection>

  </Section>
);

export default Hero;
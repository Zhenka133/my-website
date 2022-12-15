import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Tabs from "../../components/Tabs/Tabs";

const Experience = () => {
  return (
    <SectionContainer
      id="experience"
      title="Личные достижения"
      maxWidth="sm"
      padding="120"
      reverse
    >
      <Tabs />
    </SectionContainer>
  );
};

export default Experience;

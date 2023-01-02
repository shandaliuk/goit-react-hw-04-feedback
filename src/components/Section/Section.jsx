import { SolidSection, Heading } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SolidSection>
      <Heading>{title}</Heading>
      {children}
    </SolidSection>
  );
};

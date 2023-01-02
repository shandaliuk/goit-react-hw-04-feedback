import PropTypes from 'prop-types';
import { SolidSection, Heading } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SolidSection>
      <Heading>{title}</Heading>
      {children}
    </SolidSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

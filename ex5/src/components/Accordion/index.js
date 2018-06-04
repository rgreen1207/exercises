import React from "react";
import Section from '../Section/index.js';

class Accordion extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <Section title="One">
          1
        </Section>
        <Section title="Two">
          2
        </Section>
        <Section title="Three">
          3
        </Section>
        <Section title="Four">
          4
        </Section>
      </div>
    );
  }
}

export default Accordion;
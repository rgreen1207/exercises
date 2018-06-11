import React from "react";
import Section from '../Section/index.js';

class Accordion extends React.Component {
  state = {
    openSection: true
  };

  sectionOpenCallback = (sectionId) =>{
    this.setState({
      openSection: sectionId
    })
  };

  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <Section title="One" id={1} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          1
        </Section>
        <Section title="Two" id={2}  callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          2
        </Section>
        <Section title="Three" id={3} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          3
        </Section>
        <Section title="Four" id={4} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          4
        </Section>
      </div>
    );
  }
}

export default Accordion;
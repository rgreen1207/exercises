import React from "react";
import Section from '../Section/index.js';

class Accordion extends React.Component {
  state = {
    openSection: true
  };

  sectionOpenCallback = (sectionId) => {
    this.setState({
      openSection: sectionId
    })
  };

  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <Section title="One" id={1} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          一 (ichi)
        </Section>
        <Section title="Two" id={2} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          二 (ni)
        </Section>
        <Section title="Three" id={3} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          三 (san)
        </Section>
        <Section title="Four" id={4} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          四 (shi/yon)
        </Section>
        <Section title="Five" id={5} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          五 (go)
        </Section>
        <Section title="Six" id={6} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          六 (roku)
        </Section>
        <Section title="Seven" id={7} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          七 (shichi/nana)
        </Section>
        <Section title="Eight" id={8} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          八 (hachi)
        </Section>
        <Section title="Nine" id={9} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          九 (kyū/ku)
        </Section>
        <Section title="Ten" id={10} callback={this.sectionOpenCallback} openSection={this.state.openSection}>
          十 (jū)
        </Section>

      </div>
    );
  }
}

export default Accordion;
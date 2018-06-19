import React from "react";
import Section from '../Section/index.js';

const sectionList = [
  {title: "One", text: "一 (ichi)"},
  {title: "Two", text: "二 (ni)"},
  {title: "Three", text: "三 (san)"},
  {title: "Four", text: "四 (shi/yon)"},
  {title: "Five", text: "五 (go)"},
  {title: "Six", text: "六 (roku)"},
  {title: "Seven", text: "七 (shichi/nana)"},
  {title: "Eight", text: "八 (hachi)"},
  {title: "Nine", text: "九 (kyū/ku)"},
  {title: "Ten", text: "十 (jū)"}
];

class Accordion extends React.Component {
  state = {
    openSection: false
  };

  sectionOpenCallback = (sectionId) => {
    this.setState({
      openSection: this.state.openSection === sectionId ? false : sectionId
    });
  };

  sectionJSX = () => {
    return sectionList.map((section, i) => {
      return <Section key={i}
                      title={section.title}
                      callback={() => this.sectionOpenCallback(i)}
                      openSection={this.state.openSection}
                      sectionId={i}>
        {section.text}
      </Section>
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        {this.sectionJSX()}
      </div>
    );
  }
}

export default Accordion;
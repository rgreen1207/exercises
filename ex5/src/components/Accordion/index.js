import React from "react";
import Section from '../Section/index.js';

const sectionJapanese = [
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

const sectionChinese = [
  {title: "One", text: "一 (yī)"},
  {title: "Two", text: "二 (èr)"},
  {title: "Three", text: "三 (sān)"},
  {title: "Four", text: "四 (sì)"},
  {title: "Five", text: "五 (wǔ)"},
  {title: "Six", text: "六 (liù)"},
  {title: "Seven", text: "七 (qī)"},
  {title: "Eight", text: "八 (bā)"},
  {title: "Nine", text: "九 (jiǔ)"},
  {title: "Ten", text: "十 (shí)"}
];

const buttonList = [
  {text: "Japanese", fnct: sectionJapanese},
  {text: "Chinese", fnct: sectionChinese}
]

class Accordion extends React.Component {
  state = {
    openSection: false,
    lang: sectionJapanese,
    language: "Japanese"
  };

  sectionOpenCallback = (sectionId) => {
    this.setState({
      openSection: this.state.openSection === sectionId ? false : sectionId
    });
  };

  sectionJSX = (sectionList) => {
    return sectionList.map((section, i) => {
      return <Section key={i}
                      title={section.title}
                      callback={() => this.sectionOpenCallback(i)}
                      openSection={this.state.openSection}
                      sectionId={i}>
        {section.text}
      </Section>
    });
  };

  langButtons = buttonList.map((btn, i)=>{
    return <button key={i}
                   onClick={() => this.setState({
                     lang: btn.fnct,
                     language: btn.text
                   })}>
      {btn.text}
    </button>
  });

  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        {this.langButtons}
        <div>Language: {this.state.language}</div>
        {this.sectionJSX(this.state.lang)}
      </div>
    );
  }
}

export default Accordion;
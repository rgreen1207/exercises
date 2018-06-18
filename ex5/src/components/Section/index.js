import React from "react";
import './index.css';

class Section extends React.Component {

  toggleOpen = () => {
    this.props.callback(this.props.sectionId);
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleOpen} className="buttonSelector">
          <div>
            {this.props.title}
          </div>
        </button>
        <div>
          <div className={this.props.closeSection ? '' : 'close'}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;


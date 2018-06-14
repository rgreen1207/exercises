import React from "react";
import './index.css';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true,
    };
  }

  componentWillReceiveProps = () => {
    if (this.state.isClosed === false) {
      this.setState({
        isClosed: true
      });
    }
  };

  toggleOpen = () => {
    const isClosed = this.state.isClosed;
    if (isClosed) {
      this.props.callback(this.props.id);
    }

    this.setState({
      isClosed: !isClosed,
    });
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
          <div className={this.state.isClosed ? 'close' : ''}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;


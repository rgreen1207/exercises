import React from "react";
import './index.css';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleOpenClick = this.handleOpenClick.bind(this);
    this.state = {
      isClosed: true,
      myClass: 'close'
    };
  }
  handleOpenClick() {
    this.setState({
      isClosed: false,
      myClass: ' '
    });
  }
  handleCloseClick(){
    this.setState({
      isClosed: true,
      myClass: 'close'
    });
  }
  render() {
    const isOpen = this.state.isClosed;
    return (
      <div>
        <button onClick={isOpen ? (this.handleOpenClick) : (this.handleCloseClick)}>
          <div>
            {this.props.title}
          </div>
        </button>
        <div>
          <div className={this.state.myClass}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
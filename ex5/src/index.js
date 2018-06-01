import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();


class section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClick() {
    if (this.state.open) {
      this.state = {
        open: false
      };
    } else {
      this.state = {
        open: true
      };
    }
  }
  render() {
    return (
      <div className={this.state.class}>
        <button>Toggle</button>
        <div onClick={this.handleClick}>
          {this.props.title}
        </div>
        <div>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

class Accordion extends React.Component {
  render() {
    return (
      <div className='aBox'>
        <div>{this.props.title}</div>
        <section title="One">
          1
        </section>
        <section title="Two">
          2
        </section>
        <section title="Three">
          3
        </section>
        <section title="Four">
          4
        </section>
      </div>
    );
  }
}

ReactDOM.render(<Accordion title="Some numbers"/>, document.getElementById("accordion"));


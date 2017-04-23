require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
      <section className="img-sec">
      </section>
      <nav className="controller-nav">
      </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

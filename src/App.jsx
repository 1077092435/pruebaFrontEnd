import React, { Component } from 'react';
import { css } from "aphrodite"; 
import styles from './styles';
import ImagesRender from './components/images';
import HeaderRender from './components/header';
import BodyRender from './components/body';


let windowWidth = window.innerWidth;


class App extends Component {
  render () {
    return (
      <div>
        <div className={css(styles.container)}>
          <div className={css(styles.header)}>
            <HeaderRender />
          </div>
        </div>
        <div className={css(styles.bodyContainer)}>
          <ImagesRender index={1} showThumbs={windowWidth>600?true:false}/>
          <div className={css(styles.body)}>
          <BodyRender />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

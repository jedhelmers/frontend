import React, { Component } from 'react';
import logo from './logo.svg';
import styles2 from './styles2.module.css'
import styles1 from './styles.module.css'
import './App.css'

import * as PostAPI from './data/postAPI'


class App extends Component {
  state = {
    posts: []
  }

  getPosts() {
    PostAPI.getAllPosts()
      .then(posts => {
        this.setState({posts:posts});
      })
  }

  componentDidMount() {
  }

  state = {
    toggle: true
  }

  toggleStyle = () => {
    const tog = !this.state.toggle
    this.setState({ toggle: tog })
  }

  render() {
    let styles = this.state.toggle ? styles1 : styles2

    return (
      <div className="App">
        <header className="App-header">
          <div onClick={() => this.toggleStyle()}>Toggle Style</div>
          <table className={styles.table}>
            {this.state.toggle && (
              <thead>
                <tr>
                  <th>Bin Location</th>
                  <th>Item Number</th>
                  <th>ID</th>
                  <th>ID</th>
                  <th></th>
                </tr>
              </thead>
            )}
            <tfoot className={styles.tfoot}>
              <tr>
                  <td colspan='9'>Foot</td>
              </tr>
            </tfoot>
            <tbody className={styles.tbody}>

              <tr>
                <td className={styles.td1}>
                  {!this.state.toggle && (
                    <strong>Bin Location</strong>
                  )}
                  <div>BUTTSMCGOO</div>
                </td>
                <td className={styles.td2}>
                  {!this.state.toggle && (
                    <strong>Item Number</strong>
                  )}
                  <div>1234567890</div>
                </td>
                <td className={styles.td3}>3</td>
                <td className={styles.td4}>4</td>
                <td className={styles.td5}>
                  <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      height: '100%',
                      width: '100%'}}
                    >
                    +
                  </div>
                </td>
              </tr>


            </tbody>
          </table>

        </header>
      </div>
    );
  }
}

export default App;

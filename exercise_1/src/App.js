import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import BottomBar from './components/BottomBar/BottomBar';
import PAGES from './data/pages';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 2
    }

  }

  handleChangePage(pageId) {
    const id = parseInt(pageId);
    this.setState({
      currentPage: id
    });
  }

  render() {

    var title = PAGES[this.state.currentPage]["title"];
    
    // Check if exists a page component
    var page = false;
    var Page;
    if("component" in PAGES[this.state.currentPage]) {
      Page = PAGES[this.state.currentPage]["component"];
      page = true;
    }
    return (
      <div className="App">
        <Header title={title} />
        {
          page && <Page />
        }
        <BottomBar init={this.state.currentPage} onChangePage={(p) => this.handleChangePage(p)} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import './App.css';
import Nav from './components/nav'
// import Video from './components/media'
import CSSBaseline from '@material-ui/core/CssBaseline'
// import Logo from './elements/shortLogo'
import FullName from './elements/logo'
import TShirt from './components/tShirts'
import Records from './components/records'
import Page from './components/page'
import Videos from './components/videoLibrary'
import Gigs from './components/gigs'
import './assets/Poster.png'

class App extends Component {
  
  state = {
    selectedLink: '',
    visible: false
  }

  setVisibleState = (bool) => {
    this.setState({visible:bool})
  } 

  componentWillUnmount = () => {
    this.setState({visible: false})
  }

  getClickedLink = (e, data) => {
    this.setState({selectedLink:data})
  }

  renderComponents = (selectedLink) => {
    switch (selectedLink) {
      case 'About':
        return <Page id='page-active' action={this.setVisibleState} className={this.state.visible ? 'active' : 'deactive'}/>
      case 'Shirts':
        return <TShirt id='shirt-active' action={this.setVisibleState} className={this.state.visible ? 'active' : 'deactive'}/>
      case 'Videos':
        return <Videos id='video-active' action={this.setVisibleState} className={this.state.visible ? 'active' : 'deactive'}/>
      case 'Gigs':
        return <Gigs id='gig-active' action={this.setVisibleState} className={this.state.visible ? 'active' : 'deactive'}/>
      case 'Records':
        return <Records id='record-active' action={this.setVisibleState} className={this.state.visible ? 'active' : 'deactive'}/>
      default:
        return <FullName id='name-active' action={this.setVisibleState} className={this.state.visible ? 'active' : 'deactive'}/>
    }
  }

  render() {
    const sectionsObj = [ 
      {
        class: 'main',
        name: 'About'
      },
      {
        class: 'main',
        name: 'Videos'
      },
      {
        class: 'main',
        name: 'Gigs'
      },
      {
        class: 'main',
        name: 'Records'
      },
      {
        class: 'shop',
        name: 'Shirts'
      },
    ]

    return (
      <React.Fragment>
        <CSSBaseline>
          <div style={{backgroundColor: 'brown', width: '100%'}} >
            <main className="main" name="main" >
              <section className="App-header">
                {/* <Logo/>  */}
                <Nav 
                  links={sectionsObj} 
                  action={(e,data)=>this.getClickedLink(e,data)}
                />
                {this.renderComponents(this.state.selectedLink)}
              </section>

            </main>
          </div>
        </CSSBaseline>
      </React.Fragment>
    );
  }
}

export default App;

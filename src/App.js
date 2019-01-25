import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'
import Video from './components/media'
import Page from './components/page'
import CSSBaseline from '@material-ui/core/CssBaseline'
// import Logo from './elements/shortLogo'
import FullName from './elements/logo'
import TShirt from "./components/tShirts";
import './assets/Poster.png'




class App extends Component {
  
  state = {
    height: this.props.dimensions.height,
    width: this.props.dimensions.width
  }

  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth;
      let update_height = window.innerHeight;
      this.setState({ width: update_width, height: update_height });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  renderPages=(pageArr)=> {
    return pageArr.map((i,k)=>{

      switch (i.name) {
        case 'About':
          return <Page 
            height={this.state.height} 
            width={this.state.width}
            name={i.class}
            key={k}  
          />
          // break;
        case 'Gigs':
         return <Page 
          height={this.state.height} 
          width={this.state.width}
          name={i.class}
          key={k}
        />
        // break;
        case 'Shop':
        return <TShirt/>
        // break;
    }})
    
    // if (pageArr){
    //   return (pageArr.map((i,k)=>{
    //     return i.name !== "Main"
    //     ? (
    //       <Page 
    //         height={this.state.height} 
    //         width={this.state.width}
    //         name={i.class}
    //         key={k}
    //       />
    //     )
    //     : null
    //   })
    // )}
  }

  render() {
    const sectionsObj = [ 
      {
        class: 'main',
        name: 'Main'
      },
      {
        class: 'shop',
        name: 'Shop'
      },
      {
        class: 'about',
        name: 'About'
      },
      // {
      //   class: 'gigs',
      //   name: 'Gigs'
      // },
    ]

    return (
      <React.Fragment>
        <CSSBaseline>
          <div style={{backgroundColor: 'brown', width: '100%'}} >
            <main className="main" name="main" >
              <header className="App-header">
                {/* <Logo/>  */}
                <FullName/> 
                <Nav links={sectionsObj}/>
                <Video />
              </header>
              {/* Render all pages relating to links */}
              {this.renderPages(sectionsObj)}

            </main>
          </div>
        </CSSBaseline>
      </React.Fragment>
    );
  }
}

export default App;

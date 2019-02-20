import React,{Component} from 'react'
import styled from 'styled-components'
import logo from '../assets/THSM_Full.png'



const Wrapper = styled.div`
  width: 30%;
  height: 55%;
  bottom: 2%;
  right: 0;
  top: 2%;
  // display: flex;
  align-self: flex-end;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

// const ShowLogo = props => (
//   <Wrapper>
//     <Image src={logo}/>
//   </Wrapper>
// )


class StyledLogo extends Component{
  componentDidMount = () => {
    setTimeout(() => {
      this.props.action(true)
  }, 100)
  }
  
  componentWillUnmount = () => {
    this.props.action(false)
  }
  render(){
    return(
      <Wrapper id={this.props.id} className={this.props.className}>
        <Image src={logo}/>
      </Wrapper>
    )
  }
}

export default StyledLogo

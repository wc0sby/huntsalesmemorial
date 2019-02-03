import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../assets/THSM_Full.png'



const Wrapper = styled.div`
  width: 42%;
  height: 65%;
  bottom: 2%;
  // left: 30%;
  right: 0;
  top: 2%;
  position: absolute;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const ShowLogo = props => (
  <Wrapper>
    <Image src={logo}/>
  </Wrapper>
)


// class StyledLogo extends Component{
//   render(){
//     return(
//         <Logo />
//     )
//   }
// }

export default ShowLogo

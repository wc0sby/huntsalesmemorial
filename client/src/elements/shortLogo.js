import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 25%;
  height: 25%;
  top: 0;
  left: 0;
  position: fixed;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const ShowLogo = props => (
  <Wrapper>
    <Image url='./assets/THSM-Logo2.png'/>
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

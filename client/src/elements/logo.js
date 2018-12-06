import React, { Component } from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
  width: 32%;
  height: 55%;
  bottom: 2%;
  left: 12%;
  position: absolute;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const ShowLogo = props => (
  <Wrapper>
    <Image src='/assets/THSM_Full.png'/>
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

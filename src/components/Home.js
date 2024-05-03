import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Hero from './Hero'

function Home() {
  return (
    <Container>
        <Header />
        <Hero />
    </Container>
  )
}

export default Home

const Container = styled.div`
    // position: relative;
`
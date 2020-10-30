import { useCallback, useState } from 'react'
import styled from 'styled-components'

import { Container, Title } from '../styles/pages/index'
import Indicator from '../components/Indicator'

export default function Home() {

  return (
  <Container>
    <Title>Indicators</Title>
    <br />
    <Indicator boxColor="#16c4c4" indicator="maternidade" units={410} />
    <Indicator boxColor="#14739e" indicator="viveiro" units={5230} />
    <Indicator boxColor="#1e7c4e" indicator="berçário" units={1700} />
    <Indicator boxColor="#8cc63f" indicator="fase final" units={3000} />
  </Container>
  )
}

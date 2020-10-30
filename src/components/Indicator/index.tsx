import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { RiPlantLine } from 'react-icons/ri';
import { Box, Container, Image, More, Name, Units, Wrapper } from './styles';

interface IndicatorProps {
    indicator: string;
    units: number;
    boxColor: string;
}

const Indicator: React.FC<IndicatorProps> = ({boxColor, indicator, units, ...otherProps}) => {
  return (
      <Container>
          <More><p>Ver Mais<i><IoIosArrowForward size={28} color={boxColor} /></i></p></More>
          <Box boxColor={boxColor}>
            <Name>
                <header>{indicator}</header>
            </Name>
            <Wrapper>
                <Units>
                    <p>Unidades:</p>
                    <span>{units}</span>
                </Units>
                <Image>
                    <RiPlantLine size={30} />
                    <RiPlantLine size={30} />
                    <RiPlantLine size={30} />
                </Image>
            </Wrapper>
          </Box>
      </Container>
  );
}

export default Indicator;
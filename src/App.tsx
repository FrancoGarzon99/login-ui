import * as React from "react";
import {
  ChakraProvider, Heading,
} from "@chakra-ui/react";
import theme from './styles/GlobalStyles';
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher />
    <Heading color='brand.700'>NEW PROYECT</Heading>
  </ChakraProvider>
);

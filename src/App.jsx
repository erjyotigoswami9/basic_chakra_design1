import { useState, useRef } from "react";
import "./App.css";
import {
  Box,
  Button,
  ChakraProvider,
  Portal,
  Stack,
  ButtonGroup,
  Wrap,
  WrapItem,
  Flex,
  Grid,
  GridItem,
  Heading,
  Avatar,
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader
} from "@chakra-ui/react";

function Example() {
  const ref = useRef();
  return (
    <div>
      <Portal containerRef={ref}>
        <Box
          bg="lightskyblue"
          color="white"
          width={"100%"}
          height={"fit-content"}
          padding={"10"}
        >
          <Stack direction="column">
            <Wrap spacing={"10"} marginTop={"6"} marginLeft={{ base: "50%" }}>
              <WrapItem>
                <Button colorScheme="gray">Home</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="gray">About</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="gray">Contact</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="gray">Login</Button>
              </WrapItem>
            </Wrap>
          </Stack>
        </Box>
      </Portal>
      <div style={{ background: "red" }} ref={ref} />
    </div>
  );
}

function App() {
  return (
    <div style={{backgroundColor:"rgb(237,242,246)" }} >
      <Example />
      <br />
      <div style={{  borderRight:"4px solid black"}}>
      <Heading noOfLines={1} textAlign={"center"} >
        Our Clients Speak
      </Heading>
      <br />
      <h4
        style={{
          textAlign: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        We have been working with Clients around the World
      </h4>
      <br />
      
      <Grid
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          xl: "repeat(3,1fr)",
        }}
        gap={"1"}
        marginTop={"20"}
      >
        <GridItem  textAlign={"center"} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} marginBottom={'10'} marginLeft={'8%'} marginRight={'8%'}>
          <br/>
          <Flex bg={'white'} direction={'column'} marginLeft={'5'} marginRight={'5'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} paddingLeft={'8'} paddingRight={'8'} paddingBottom={'5'} paddingTop={'5'}>
            <Stack spacing={3}>
              <Heading as='h1' size='xl'>
                Efficient Collaborating
              </Heading>
            </Stack>
            <br/>
            <Stack spacing={3}>
              <Text fontSize='sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus doloribus voluptatum cupiditate beatae minus sapiente, in dignissimos itaque culpa fugiat commodi, magnam eum ipsa consequatur, ut quam enim alias.
              </Text>
            </Stack>
          </Flex>
          <br />
          <Wrap marginLeft={"40%"}>
            <WrapItem>
              <Avatar
                size="lg"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />{" "}
            </WrapItem>
          </Wrap>
          <br />
          <Stack spacing={6}>
            <Heading as="h5" size="sm">
              Jane Cooper
            </Heading>
          </Stack>
          <Stack spacing={3}>
            <Text fontSize="sm">CEO at ABC Cooperation</Text>
          </Stack>
          <br />
        </GridItem>
        <GridItem textAlign={"center"} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} marginBottom={'10'} marginLeft={'8%'} marginRight={'8%'}>
          <br/>
          <Flex bg={'white'} direction={'column'} marginLeft={'5'} marginRight={'5'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} paddingLeft={'8'} paddingRight={'8'} paddingBottom={'5'} paddingTop={'5'}>
            <Stack spacing={3}>
              <Heading as='h1' size='xl'>
                Efficient Collaborating
              </Heading>
            </Stack>
            <br/>
            <Stack spacing={3}>
              <Text fontSize='sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus doloribus voluptatum cupiditate beatae minus sapiente, in dignissimos itaque culpa fugiat commodi, magnam eum ipsa consequatur, ut quam enim alias.
              </Text>
            </Stack>
          </Flex>
          <br />
          <Wrap marginLeft={"40%"}>
            <WrapItem>
              <Avatar
                size="lg"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />{" "}
            </WrapItem>
          </Wrap>
          <br />
          <Stack spacing={6}>
            <Heading as="h5" size="sm">
              Jane Cooper
            </Heading>
          </Stack>
          <Stack spacing={3}>
            <Text fontSize="sm">CEO at ABC Cooperation</Text>
          </Stack>
          <br />
        </GridItem>
        <GridItem  textAlign={"center"} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} marginBottom={'10'} marginLeft={'8%'} marginRight={'8%'}>
          <br/>
          <Flex bg={'white'} direction={'column'} marginLeft={'5'} marginRight={'5'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} paddingLeft={'8'} paddingRight={'8'} paddingBottom={'5'} paddingTop={'5'}>
            <Stack spacing={3}>
              <Heading as='h1' size='xl'>
                Efficient Collaborating
              </Heading>
            </Stack>
            <br/>
            <Stack spacing={3}>
              <Text fontSize='sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus doloribus voluptatum cupiditate beatae minus sapiente, in dignissimos itaque culpa fugiat commodi, magnam eum ipsa consequatur, ut quam enim alias.
              </Text>
            </Stack>
          </Flex>
          <br />
          <Wrap marginLeft={"40%"}>
            <WrapItem>
              <Avatar
                size="lg"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />{" "}
            </WrapItem>
          </Wrap>
          <br />
          <Stack spacing={6}>
            <Heading as="h5" size="sm">
              Jane Cooper
            </Heading>
          </Stack>
          <Stack spacing={3}>
            <Text fontSize="sm">CEO at ABC Cooperation</Text>
          </Stack>
          <br />
        </GridItem>
                
      </Grid>
      <br/><br/>
      </div>
    </div>
  );
}

export default App;

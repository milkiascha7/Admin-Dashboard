import React, { useState } from 'react'
import { Flex, Heading, Avatar, AvatarGroup, Text, Icon, IconButton, Table, Thead, Tbody, Tr, Th, Td, Divider, Link, Box, Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FiHome, FiPieChart, FiDollarSign, FiBox, FiChevronDown, FiChevronUp, FiPlus, FiCreditCard, FiSearch, FiBell, FiCalendar } from "react-icons/fi"
import MyChart from '../components/MyChart'



const Dashboard = () => {
  const [display, changeDisplay] = useState('hide')
  const [value, changeValue] = useState(1)
  return (
    <Flex
      h={[null, null, "100vh"]}
      // w="1600px"
      overflow="hidden"
      flexDir={["column", "column", "row"]}
    >
      {/* the first column on the left */}
      <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        flexDir="column"
        alignItems="center"
        color="#fff"
        backgroundColor="#020202"
      >
        <Flex flexDir="column"
          justify="space-between"
          height={[null, null, "100vh"]}

        >
          <Flex flexDir="column" as="nav" >
            <Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
              alignSelf="center"
              letterSpacing="tight"
            >
              Rise.
            </Heading>
            <Flex flexDir={["row", "row", "column", "column", "column"]} align={["center", "center", "center", "flex-start", "flex-start"]} justify="center">
              <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                <Link display={['center', "center", "center", "flex-start", "flex-start"]}>
                  <Icon display={["none", "none", "flex", "flex", "flex"]} as={FiHome} fontSize="2xl" className="active-icon" />
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text display={["flex", "flex", "none", "flex", "flex"]} className="active" >Home</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                <Link>
                  <Icon display={["none", "none", "flex", "flex", "flex"]} as={FiPieChart} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text display={["flex", "flex", "none", "flex", "flex"]} className="active" >Credit</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                <Link>
                  <Icon display={["none", "none", "flex", "flex", "flex"]} as={FiDollarSign} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text display={["flex", "flex", "none", "flex", "flex"]} className="active" >Wallet</Text>
                </Link>
              </Flex>
              <Flex className='sidebar-items' mr={[2, 6, 0, 0, 0]}>
                <Link>
                  <Icon display={["none", "none", "flex", "flex", "flex"]} as={FiBox} fontSize="2xl" />
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text display={["flex", "flex", "none", "flex", "flex"]} className="active" >Services</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>

          <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
            <Avatar my={2} src="miki.jpg" />
            <Text align="center">Milkias Hailu</Text>

          </Flex>
        </Flex>

      </Flex>

      {/* the middle column */}
      <Flex
        w={["100%", "100%", "60%", "60%", "55%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
        bg="white"
        color="black"
      >
        <Heading fontWeight="normal">
          Welcome back, <Flex fontWeight="bold" display="inline-block" > Miki</Flex>
        </Heading>
        <Text color="gray" fontSize="sm">My Balance</Text>
        <Text fontWeight="bold" color="gray" fontSize="2xl">5,720 Birr</Text>
        <MyChart />
        <Flex justifyContent="space-between" mt={8}>
          <Flex align="flex-end">
            <Heading as="h2" letterSpacing="tight">Transactions</Heading>
            <Text color="gray" fontSize="small" ml={4}>Apr 2022</Text>
          </Flex>
          <IconButton icon={<FiCalendar />} />
        </Flex>
        <Flex flexDir="column">
          <Flex overflow="hidden" css={{
            '&::-webkit-scrollbar': {
              width: '0px',
            },
            '&::-webkit-scrollbar-track': {
              width: '0px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: "black",
              borderRadius: '0px',
            },
          }}>
            <Table variant="unstyled" mt={4}>
              <Thead>
                <Tr color="gray">
                  <Th>Name of Transactions</Th>
                  <Th>Category</Th>
                  <Th isNumeric>Cashback</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex>
                      <Avatar size="sm" mr={2} src="amazon.jpeg" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                        <Text fontSize="sm" color="gray">Apr 24, 2021 at 1.40pm</Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Electronic Devices</Td>
                  <Td isNumeric> +2.00 birr</Td>
                  <Td isNumeric><Text fontWeight="bold" display="inline-table"> -242.00 birr</Text></Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex>
                      <Avatar size="sm" mr={2} src="tele.jpg" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">Ethio Telecom</Heading>
                        <Text fontSize="sm" color="gray">Apr 24, 2021 at 1.40pm</Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Phone Bills</Td>
                  <Td isNumeric> +2.00 birr</Td>
                  <Td isNumeric><Text fontWeight="bold" display="inline-table"> -1242.00 birr</Text></Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex>
                      <Avatar size="sm" mr={2} src="Spotify.png" />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">Spotify</Heading>
                        <Text fontSize="sm" color="gray">Apr 12, 2021 at 9.40pm</Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Music Payment</Td>
                  <Td isNumeric> +2.00 birr</Td>
                  <Td isNumeric><Text fontWeight="bold" display="inline-table"> -42.00 birr</Text></Td>
                </Tr>
                {display == "show" &&
                  <>
                    <Tr>
                      <Td>
                        <Flex>
                          <Avatar size="sm" mr={2} src="amazon.jpeg" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                            <Text fontSize="sm" color="gray">Apr 24, 2021 at 1.40pm</Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Electronic Devices</Td>
                      <Td isNumeric> +2.00 birr</Td>
                      <Td isNumeric><Text fontWeight="bold" display="inline-table"> -242.00 birr</Text></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex>
                          <Avatar size="sm" mr={2} src="amazon.jpeg" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                            <Text fontSize="sm" color="gray">Apr 24, 2021 at 1.40pm</Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Electronic Devices</Td>
                      <Td isNumeric> +2.00 birr</Td>
                      <Td isNumeric><Text fontWeight="bold" display="inline-table"> -242.00 birr</Text></Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex>
                          <Avatar size="sm" mr={2} src="amazon.jpeg" />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">Amazon</Heading>
                            <Text fontSize="sm" color="gray">Apr 24, 2021 at 1.40pm</Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Electronic Devices</Td>
                      <Td isNumeric> +2.00 birr</Td>
                      <Td isNumeric><Text fontWeight="bold" display="inline-table"> -242 birr</Text>.00</Td>
                    </Tr>
                  </>
                }
              </Tbody>
            </Table>
          </Flex>
          <Flex>
            <Divider />
            <IconButton icon={display == 'show' ? <FiChevronUp /> : <FiChevronDown />}
              onClick={() => {
                if (display == 'show') {
                  changeDisplay('none')
                } else {
                  changeDisplay('show')
                }
              }}
            />
            <Divider />
          </Flex>
        </Flex>

      </Flex>

      {/* the last column on the right */}
      <Flex
        w={["100%", "100%", "35%"]}
        minW={[null, null, "300px", "300px", "400px"]}
        bgColor="#F5F5F5"
        p="3%"
        flexDir="column"
        overflow="auto"
        backgroundColor="#020202"
      >
        <Flex alignContent="center">
          <InputGroup bgColor="#fff" mb={4} border="none" borderColor="#fff" borderRadius="10px" mr={2}>
            <InputLeftElement pointevents="none" >
              {<FiSearch />}
            </InputLeftElement>
            <Input placeholder="Search" borderRadius="10px" textColor="black" bg="gray" />
          </InputGroup>
          <IconButton icon={<FiBell />} fontSize="sm" borderRadius="50%" p="10px" />
          <Flex
            w={30}
            h={25}
            bgColor="#B57295"
            align="center"
            justify="center"
            borderRadius="50%"
            ml="-3"
            mt="-3"
            zIndex={2}
            fontSize="xs"
          >
            2
          </Flex>
        </Flex>
        <Heading color="gray.100">My Cards</Heading>
        {value == 1 &&
          <Box
            borderRadius="25px"
            mt={4}
            w="100%"
            h="200px"
            bgGradient="linear(to-t, #B57295, #29259A)"
          >
            <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold">5,750.20 birr</Text>
                </Flex>
                <Flex align="center">
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>Rise.</Text>
                </Flex>
              </Flex>
              <Text mb={4}>**** **** **** 1289</Text>
              <Flex align="flex-end" justify="space-between">
                <Flex>
                  <Flex flexDir="column" mr={4}>
                    <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                    <Text fontSize="lg">12/23</Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                    <Text fontSize="lg">***</Text>
                  </Flex>
                </Flex>
                <Icon as={FiCreditCard} />
              </Flex>
            </Flex>

          </Box>
        }
        {value == 2 &&
          <Box
            borderRadius="25px"
            mt={4}
            w="100%"
            h="200px"
            bgGradient="linear(to-t, yellow.300, blue.500)"
          >
            <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold">5,750.20 birr</Text>
                </Flex>
                <Flex align="center">
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>Rise.</Text>
                </Flex>
              </Flex>
              <Text mb={4}>**** **** **** 1289</Text>
              <Flex align="flex-end" justify="space-between">
                <Flex>
                  <Flex flexDir="column" mr={4}>
                    <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                    <Text fontSize="lg">12/23</Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                    <Text fontSize="lg">***</Text>
                  </Flex>
                </Flex>
                <Icon as={FiCreditCard} />
              </Flex>
            </Flex>

          </Box>
        }
        {value == 3 &&
          <Box
            borderRadius="25px"
            mt={4}
            w="100%"
            h="200px"
            bgGradient="linear(to-t, orange.300, pink.600)"
          >
            <Flex p="1em" color="#fff" flexDir="column" h="100%" justify="space-between">
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex flexDir="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold">5,750.20 birr</Text>
                </Flex>
                <Flex align="center">
                  <Icon mr={2} as={FiCreditCard} />
                  <Text>Rise.</Text>
                </Flex>
              </Flex>
              <Text mb={4}>**** **** **** 1289</Text>
              <Flex align="flex-end" justify="space-between">
                <Flex>
                  <Flex flexDir="column" mr={4}>
                    <Text textTransform="uppercase" fontSize="xs">Valid Thru</Text>
                    <Text fontSize="lg">12/23</Text>
                  </Flex>
                  <Flex flexDir="column">
                    <Text textTransform="uppercase" fontSize="xs">CVV</Text>
                    <Text fontSize="lg">***</Text>
                  </Flex>
                </Flex>
                <Icon as={FiCreditCard} />
              </Flex>
            </Flex>

          </Box>
        }
        <Flex justify="center" mt={2}>
          <Button bgColor={value == 1 ? "gray.600" : 'gray.400'} onClick={() => changeValue(1)} size="xs" mx={1} />
          <Button bgColor={value == 1 ? "gray.600" : 'gray.400'} onClick={() => changeValue(2)} size="xs" mx={1} />
          <Button bgColor={value == 1 ? "gray.600" : 'gray.400'} onClick={() => changeValue(3)} size="xs" mx={1} />
        </Flex>
        <Flex flexDir="column" my={4}>
          <Flex justify="space-between" mb={2}>
            <Text>Balance</Text>
            <Text fontWeight="bold">140.42 birr</Text>
          </Flex>
          <Flex justify="space-between" mb={2}>
            <Text>Credit Limit</Text>
            <Text fontWeight="bold">150.00 birr</Text>
          </Flex>
        </Flex>
        <Flex align="center">

          <Heading fontWeight="normal" letterSpacing="tight" size="md" my={4} mr={2}>Send money to</Heading>
          <AvatarGroup size="md" max={3}>
            <Avatar src="amazon.jpeg" />
            <Avatar src="amazon.jpeg" />
            <Avatar src="amazon.jpeg" />
            <Avatar src="amazon.jpeg" />
            <Avatar src="amazon.jpeg" />
          </AvatarGroup>
          <Avatar icon={<FiPlus />} ml={2} color="#fff" bgColor="gray.300" />
        </Flex>
        <Text color="gray.500" mt={10} mb={2}>Card Number</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none" >
            <FiCreditCard color="gray.700" />
          </InputLeftElement>
          <Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
        </InputGroup>

        <Text color="gray.500" mt={10} mb={2}>Sum</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiDollarSign color="gray.700" />
          </InputLeftElement>
          <Input type="number" placeholder="130.00 birr" />
        </InputGroup>
        <Button mt={4} bgColor="blackAlpha.900" color="#fff" p={7} borderRadius={15}>Send Money</Button>
      </Flex>
    </Flex >
  )
}

export default Dashboard
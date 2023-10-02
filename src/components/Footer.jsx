import React from 'react';
import { Box, Center, Text, Link, Flex } from '@chakra-ui/react';
import { pg_lk } from '../../data/db';

const Footer = () => {


    return (
        <Box
            bg="teal.500"
            color="black"
            py={4}
            textAlign="center"
            bottom="0"
            width="100%"
            position={"fixed"}
            zIndex={100}
            backdropFilter="blur(12px)"
            background="rgba(0, 0, 0, 0.01)"
        >
            <Center>
                <Text>
                    &copy; 2023 Carlos Kirui. All rights reserved.
                    <Flex justify="center" mt={2}>
                        {pg_lk.map((link) => (
                            <Link href={link.url} textDecoration="none" mr={4}>
                                {link.pathname}
                            </Link>
                        ))}

                    </Flex>
                </Text>
            </Center>
        </Box>
    );
};

export default Footer;

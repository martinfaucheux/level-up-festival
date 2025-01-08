import { extendTheme } from '@chakra-ui/react';

// Define a custom color palette for #ffc46b
const theme = extendTheme({
    colors: {
        lightOrange: {
            50: '#fff4d1',  // Lightest shade
            100: '#ffeb99', // Lighter shade
            200: '#ffd766', // Light shade
            300: '#ffc46b', // Base color
            400: '#ff9c3b', // Darker shade
            500: '#ff7a00', // Darkest shade
        },
    },
    components: {
        Button: {
            baseStyle: {
                _hover: {
                    bg: 'lightOrange.500',
                },
            },
            variants: {
                solid: {
                    bg: 'lightOrange.400',
                    color: 'white',
                    _hover: {
                        bg: 'lightOrange.500',
                    },
                },
            },
        },
    },
});

export default theme;
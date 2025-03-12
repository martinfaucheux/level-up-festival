"use client";

import React, { ReactNode } from "react";
import { Box, Image, Text, VStack, Heading, Button, Flex, Link, LinkProps } from "@chakra-ui/react";

interface CustomLinkProps extends LinkProps {
    children: ReactNode;
}

const GoToFormButton = () => {
    const handleClick = () => {
        // Replace the URL below with the URL you want to open
        const url = 'https://forms.gle/svWmUjduAJ9TRLTj6';

        // Opens the URL in a new tab
        window.open(url, '_blank');
    };

    return (
        <Button variant="solid" onClick={handleClick}>
            Je m'inscris tout de suite !
        </Button>
    );
};

const CustomLink = ({ children, ...props }: LinkProps) => {
    return (
        <Link color="lightOrange.600" {...props}>
            {children}
        </Link>
    );
}

export default function Home() {
    return (
        <>
            <Box
                as="header"
                bg="lightOrange.300"
                color="white"
                py={4}
                textAlign="center"
                mb={8}
            >
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    w={300}
                    mx="auto"
                />
            </Box>

            <VStack spacing={3} align="start" px={200}>
                <Heading>
                    L'Evènement de 2025
                </Heading>
                <Text>
                    Pour célébrer nos 30 ans, nous, Benjamin Bertin et Martin Faucheux, sommes fiers de vous inviter à la première édition du Level Up Festival cet été!
                </Text>
                <Text>
                    Au programme : des concerts, des spectacles et pleins d’activités ! Le twist? C’est vous les artistes ! Envie de jouer d’un instrument en groupe ? D’organiser un spectacle d’impro? jeu télévisé ? De tenir le stand maquillage ? Tout est possible !
                </Text>
                <Text>
                    <Text as="span" fontStyle="italic">“Eh mais moi j’ai aucun skills et j’ai pas d’idée”</Text> Pas de souci, on a un tas d’idée pour vous.
                </Text>
                <Text>
                    Tu préfère profiter en regardant les animations sans prendre le micro ? C’est évidemment possible. La seule condition c’est de kiffer !
                </Text>
                <Text fontStyle="italic">
                    Plus d’infos sur les activités seront communiquées dans les mois à venir.
                </Text>

                <Heading>C'est où ?</Heading>
                <Text>Le festival aura lieu à <CustomLink href="https://labime.com/">l’Abîme</CustomLink>, un beau domaine dans l'Yonne à 30 minutes d'Auxerre.</Text>
                <Text>C'est à 2 heure de Paris en voiture. Nous créerons une discussion whatsapp pour coordonner les potentiels covoiturages un peu plus tard.</Text>
                <Text>Qui dit festival dit camping ! Tu auras plusieurs hectares pour planter tes sardines !</Text>

                <Heading>C'est quand ?</Heading>
                <Text>Le festival durera du <strong>vendredi 12 au dimanche 14 septembre</strong> mais si tu veux le prendre en cours de route c’est aussi possible. Saches juste que la big party sera le samedi soir. </Text>
                <Text>On te propose deux dates. Celle qui aura le plus de votes sera retenue.</Text>
                <Text >Le ticket d’entrée est à 40 EUR par personne et après c’est du all inclusive !</Text>


            </VStack>

            <Flex justify="center" mt={20}><GoToFormButton /></Flex>
        </>
    );
}
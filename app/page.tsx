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
            Je m'inscrit tout de suite !
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
                    Tu préfère profiter en regardant les animations depuis la pistoche sans prendre le micro ? C’est évidemment possible. La seule condition c’est de kiffer !
                </Text>
                <Text fontStyle="italic">
                    Plus d’infos sur les activités seront communiquées dans les mois à venir.
                </Text>

                <Heading>C'est où ?</Heading>
                <Text>Le festival aura lieu dans <CustomLink href="https://maps.app.goo.gl/BYzAyeVGCLXTztko7">l’Ecolo-gite du moulin de Brissac</CustomLink> au milieu des vignes dans la magnifique région d’Anjou, gracieusement prêté par la famille Bertin.</Text>
                <Text>La gare la plus proche est Angers-Saint-Laud avec des trains directs depuis Paris et Lyon. Ensuite, la ligne de bus <CustomLink href="https://aleop.paysdelaloire.fr/je-recherche-un-horaire-aleop?field_transport_type=5&city_title=Brissac-Loire-Aubance&ligne_number=">Aleop 427</CustomLink> vous amènera jusqu’à Brissac. Nous organiserons également des navettes en fonction des heures d’arrivée.</Text>
                <Text>Qui dit festival dit camping ! Tu auras tout un champ pour planter tes sardines !</Text>

                <Heading>C'est quand ?</Heading>
                <Text>Le festival durera 3 jours mais si tu veux le prendre en cours de route c’est aussi possible. Saches juste que la big party sera le samedi soir. </Text>
                <Text>On te propose deux dates. Celle qui aura le plus de votes sera retenue.</Text>
                <Text >Le ticket d’entrée est à 20 EUR par personne et après c’est du all inclusive !</Text>


            </VStack>

            <Flex justify="center" mt={20}><GoToFormButton /></Flex>
        </>
    );
}
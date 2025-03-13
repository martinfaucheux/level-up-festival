"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const dateFestival = new Date("2025-09-12T18:00:00.000Z").getTime();

  const remainingTime = () => {
    const now = new Date().getTime();
    const distance = dateFestival - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      return "Le festival est commencé!";
    }

    return `${days}j ${hours}h ${minutes}m ${seconds}s`;
  };

  const [ticking, setTicking] = useState(true),
    [remaining, setRemaining] = useState(remainingTime());

  useEffect(() => {
    const timer = setTimeout(
      () => ticking && setRemaining(remainingTime()),
      1e3
    );
    return () => clearTimeout(timer);
  }, [remaining, ticking]);
  return (
    <>
      <div className="flex bg-primary text-white pt-5 pb-5 mb-10 flex-col md:flex-row">
        
      <div className="w-full"></div>
        <div className="w-full flex justify-center items-center">
          <img src="/images/logo.png" alt="Logo" width={300} />
        </div>
        <div className="w-full text-5xl flex justify-center items-center my-5 md:my-0">
          <div className="px-10 py-10 border-2 rounded-lg">{remaining}</div>
        </div>
      </div>

      <div className="mx-5 lg:w-250 lg:mx-auto text-center">
        <div className="my-5 text-2xl">L'Evènement de 2025</div>
        <div className="my-3">
          Pour célébrer nos 30 ans, nous, Benjamin Bertin et Martin Faucheux,
          sommes fiers de vous inviter à la première édition du Level Up
          Festival cet été!
        </div>
        <div className="my-3">
          Au programme : des concerts, des spectacles et pleins d’activités ! Le
          twist? C’est vous les artistes ! Envie de jouer d’un instrument en
          groupe ? D’organiser un spectacle d’impro? jeu télévisé ? De tenir le
          stand maquillage ? Tout est possible !
        </div>
        <div className="my-3">
          <i>“Eh mais moi j’ai aucun skills et j’ai pas d’idée”</i> Pas de
          souci, on a un tas d’idée pour vous.
        </div>
        <div className="my-3">
          Tu préfère profiter en regardant les animations sans prendre le micro
          ? C’est évidemment possible. La seule condition c’est de kiffer !
        </div>
        <div className="my-3">
          Plus d’infos sur les activités seront communiquées dans les mois à
          venir.
        </div>

        <div className="my-5 text-2xl">C'est où ?</div>

        <div className="my-3">
          Le festival aura lieu à <a href="https://labime.com/">l’Abîme</a>, un
          beau domaine dans l'Yonne à 30 minutes d'Auxerre.
        </div>
        <div className="my-3">
          C'est à 2 heure de Paris en voiture. Nous créerons une discussion
          whatsapp pour coordonner les potentiels covoiturages un peu plus tard.
        </div>
        <div className="my-3">
          Qui dit festival dit camping ! Tu auras plusieurs hectares pour
          planter tes sardines !
        </div>

        <div className="my-5 text-2xl">C'est quand ?</div>
        <div className="my-3">
          Le festival durera du{" "}
          <strong>vendredi 12 au dimanche 14 septembre</strong> mais si tu veux
          le prendre en cours de route c’est aussi possible. Saches juste que la
          big party sera le samedi soir.{" "}
        </div>
        <div className="my-3">
          On te propose deux dates. Celle qui aura le plus de votes sera
          retenue.
        </div>
        <div className="my-3">
          Le ticket d’entrée est à 40 EUR par personne et après c’est du all
          inclusive !
        </div>
      </div>

      <a
        href="https://forms.gle/svWmUjduAJ9TRLTj6"
        target="_blank"
        className="mb-20 md:mb-0 text-2xl my-5 flex justify-center w-100 border-2 border-primary rounded-lg mx-auto"
      >
        JE M'INSCRIS
      </a>
    </>
  );
}

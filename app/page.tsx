"use client";

import React from "react";
import Timeout from "./timeout/page";

export default function Home() {
  return (
    <>
      <div className="flex bg-primary text-white pt-5 pb-5 mb-10 flex-col md:flex-row">
        <div className="w-full"></div>
        <div className="w-full flex justify-center items-center">
          <img src="/images/logo.png" alt="Logo" width={300} />
        </div>
        <Timeout />
      </div>

      <div className="flex md:grid grid-cols-3 gap-4">
        <div className="hidden md:flex mt-40 flex-col items-center">
          <img className="mb-10" src="/images/truites.jpeg" alt="Image 1" />
          <img
            className="mb-10"
            src="/images/madame_contente.jpeg"
            alt="Image 1"
          />
          <img src="/images/fun_peoples.jpeg" alt="Image 1" />
          <div className="mb-10 italic text-stone-500">
            vraies photos du site de l'abîme
          </div>
        </div>
        <div className="mx-5">
          <div className="my-5 text-2xl">L'Evènement de 2025</div>
          <div className="my-3">
            Pour célébrer nos 30 ans, nous, Benjamin Bertin et Martin Faucheux,
            sommes fiers de vous inviter à la première édition du Level Up
            Festival cet été!
          </div>
          <div className="my-3">
            Au programme : des concerts, des spectacles et pleins d’activités !
            Le twist? C’est vous les artistes ! Envie de jouer d’un instrument
            en groupe ? D’organiser un spectacle d’impro? jeu télévisé ? De
            tenir le stand maquillage ? Tout est possible !
          </div>
          <div className="my-3">
            <i>“Eh mais moi j’ai aucun skills et j’ai pas d’idée”</i> Pas de
            souci, on a un tas d’idée pour vous.
          </div>
          <div className="my-3">
            Tu préfère profiter en regardant les animations sans prendre le
            micro ? C’est évidemment possible. La seule condition c’est de
            kiffer !
          </div>
          <div className="my-3">
            Plus d’infos sur les activités seront communiquées dans les mois à
            venir.
          </div>

          <div className="my-5 text-2xl">C'est où ?</div>

          <div className="my-3">
            Le festival aura lieu à <a href="https://labime.com/">l’Abîme</a>,
            un beau domaine dans l'Yonne à 30 minutes d'Auxerre.
          </div>
          <div className="my-3">
            C'est à 2 heure de Paris en voiture. Nous créerons une discussion
            whatsapp pour coordonner les potentiels covoiturages un peu plus
            tard.
          </div>

          <div className="my-5 text-2xl">C'est quand ?</div>
          <div className="my-3">
            Le festival durera du{" "}
            <strong>vendredi 12 au dimanche 14 septembre</strong> mais si tu
            veux le prendre en cours de route c’est aussi possible. Saches juste
            que la big party sera le samedi soir.{" "}
          </div>
          <div className="my-5 text-2xl">
            Qu'est ce qui est inclus dans les ticket early bird?
          </div>
          <div className="my-3">
            Le ticket d’entrée est à <b>45 €</b> par personne et après c’est du
            all inclusive !
          </div>
          <div className="my-3">
            Qui dit festival dit camping ! Tu auras plusieurs hectares pour
            planter tes sardines ! Si tu n'es pas un punk à chien ou que tes
            vieux lombaires supportent difficilement le matelas gonflable, des
            contacts de gîtes seront communiqués ultérieurement sur le site
            (dont un sur le domaine).
          </div>

          <div className="my-5 text-2xl">Autres infos</div>
          <div className="my-3">
            Pas de thème en particulier, viens comme tu viendrais à un festival
            (paillettes appréciées).
          </div>
          <img
            className="my-10 max-w-[300px] md:hidden mx-auto"
            src="/images/windu_perso.gif"
            alt="Image 1"
          />
          <div className="flex justify-center items-center my-5">
            <a
              href="https://forms.gle/svWmUjduAJ9TRLTj6"
              target="_blank"
              className="cool-button"
            >
              JE M'INSCRIS
            </a>
          </div>
        </div>
        <div className="hidden md:flex mt-2 flex flex-col items-center">
          <img
            className="mb-10 mb-10 max-w-[300px]"
            src="/images/barney-stinson-dancing.gif"
            alt="Image 1"
          />
          <img
            className="mb-10 mb-10 max-w-[300px]"
            src="/images/windu_perso.gif"
            alt="Image 1"
          />
          <img
            className="mb-10 mb-10 max-w-[300px]"
            src="/images/party.gif"
            alt="Image 1"
          />
          <img
            className="mb-10 mb-10 max-w-[300px]"
            src="/images/meme.png"
            alt="Image 1"
          />
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Chapter } from '@gerdesque/ui';
import { ChapterProps } from '@gerdesque/data';
import './home.scss';

const home:ChapterProps = {
  link: "home",
  groups: [
  {
    "grouped": false,
    "row": false,
    "content": [
      {
        "type": "text",
        "value": "Natürlich besteht die Kinderrepublik nicht nur aus Karl, Anna und Gerda. Damit ihr mit den beiden dieses Abenteuer erleben könnt, hat Florian eine Website entworfen, die Gerd umgesetzt hat. Anne hat dafür unter dem Einsatz von Felix‘ Sprecherstimme Trickfilme produziert.",
        "layer": "fore"
      }
    ]
  },
  {
    "grouped": true,
    "row": true,
    "content": [
      {
        "type": "text",
        "value": "Anne Mühlich",
        "option": "avatar second"
      },
      {
        "type": "text",
        "value": "Gerd Müller",
        "option": "avatar second"
      },
      {
        "type": "text",
        "value": "Julia Kothe",
        "option": "avatar"
      },
      {
        "type": "text",
        "value": "Lars Tunçay",
        "option": "avatar"
      },
      {
        "type": "text",
        "value": "Nina Heinke",
        "option": "avatar"
      },
      {
        "type": "text",
        "value": "Felix Werthschulte",
        "option": "avatar"
      }
    ]
  },
  {
    "grouped": false,
    "row": false,
    "content": [{
        "type": "text",
        "value": "Unsere Website richtet sich an all jene, die sich spielerisch mit dem Thema „Kinderrepublik“ und partizipativer Jugendarbeit in der ersten Hälfte des 20. Jahrhunderts beschäftigen wollen und erfahren möchten, wie solche Zeltlager als Form früher und praktischer Demokratiebildung funktioniert haben. In Zeiten wie jetzt, wo mehr und mehr Menschen sich von den demokratischen Institutionen abwenden, lohnt es sich, einen Blick zurückzuwerfen und zu schauen, wie Demokratiebildung insbesondere für bildungsfernere Schichten in der Vergangenheit funktioniert hat und inwiefern wir dafür etwas für unsere heutige Zeit lernen können.",
        "layer": "fore"
      }
    ]
  },
  {
    "grouped": false,
    "row": false,
    "content": [{
        "type": "redirect",
        "value": "chapter/daheim",
        "title": "Demokratie erLeben",
        "layer": "fore"
      }
    ]
  }
  ]
};

export const Home = () => {

  return (
    <Chapter {...home} />
  );
};

export default Home;

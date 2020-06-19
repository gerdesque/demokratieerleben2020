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
      },
      {
        "type": "text",
        "value": "Unsere Website richtet sich an all jene, die sich spielerisch mit dem Thema „Kinderrepublik“ und partizipativer Jugendarbeit in der ersten Hälfte des 20. Jahrhunderts beschäftigen wollen und erfahren möchten, wie solche Zeltlager als Form früher und praktischer Demokratiebildung funktioniert haben. In Zeiten wie jetzt, wo mehr und mehr Menschen sich von den demokratischen Institutionen abwenden, lohnt es sich, einen Blick zurückzuwerfen und zu schauen, wie Demokratiebildung insbesondere für bildungsfernere Schichten in der Vergangenheit funktioniert hat und inwiefern wir dafür etwas für unsere heutige Zeit lernen können.",
        "layer": "back"
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

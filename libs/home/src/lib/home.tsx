import React from 'react';
import { Chapter, ContentType } from '@gerdesque/ui'
import './home.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

const content = [
  {
    "type": ContentType.Text,
    "value": "Natürlich besteht die Kinderrepublik nicht nur aus Karl, Anna und Gerda. Damit ihr mit den beiden dieses Abenteuer erleben könnt, hat Florian eine Website entworfen, die Gerd umgesetzt hat. Anne hat dafür unter dem Einsatz von Felix‘ Sprecherstimme Trickfilme produziert."
  },
  {
    "type": ContentType.Text,
    "value": "Unsere Website richtet sich an all jene, die sich spielerisch mit dem Thema „Kinderrepublik“ und partizipativer Jugendarbeit in der ersten Hälfte des 20. Jahrhunderts beschäftigen wollen und erfahren möchten, wie solche Zeltlager als Form früher und praktischer Demokratiebildung funktioniert haben. In Zeiten wie jetzt, wo mehr und mehr Menschen sich von den demokratischen Institutionen abwenden, lohnt es sich, einen Blick zurückzuwerfen und zu schauen, wie Demokratiebildung insbesondere für bildungsfernere Schichten in der Vergangenheit funktioniert hat und inwiefern wir dafür etwas für unsere heutige Zeit lernen können."
  }
];

export const Home = (props: HomeProps) => {
  return (
    <Chapter name={["Demokratie ", <i>er</i>,"leben"]} content={content} />
  );
};

export default Home;

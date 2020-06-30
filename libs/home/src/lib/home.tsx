import React from 'react';
import { Chapter } from '@gerdesque/ui';
import { ChapterProps } from '@gerdesque/data';
import './home.scss';

const home:ChapterProps = {
  link: "home",
  name: "Demokratie erLeben",
  groups: [{
    "grouped": false,
    "row": false,
    "background": "2_31_b",
    "content": [{
      "type": "text",
      "value": "Diese Website erzählt die Geschichte von Anna, Karl und Gerda. Alle drei entstammen der Arbeiterklasse und träumen Ende der 1920er Jahre von einer besseren Zukunft. Begleitet sie auf ihrem Weg in ein Zeltlager der sozialdemokratischen Organisation der 'Reichsarbeitsgemeinschaft der Kinderfreunde'. In dieser so genannten 'Kinderrepublik' erleben sie viele spannende Dinge, und lernen Demokratie durch eigenes Handeln kennen.",
      "option": "reveal"
    }]
  },
  {
    "grouped": true,
    "row": false,
    "content": [{
      "type": "image",
      "value": "02_1455_(114)",
      "option": "third"
    },
    {
      "type": "text",
      "value": "Die Reise zur Kinderrepublik wäre für Anna, Karl und Gerda ohne Anne Mühlich und Gerd Müller nicht möglich gewesen. Im Rahmen des Kulturhackathons 'Coding da Vinci Westfalen-Ruhrgebiet' 2019 entwickelten die beiden diese Scrollytelling-Website, die auf Fotos und Material des Archivs der Arbeiterjugendbewegung basiert. 2020 haben sie im Rahmen eines Stipendiums des Coding da Vinci die Website für die Zwecke des Archivs ergänzt und ausgebaut."
    }]
  },
  {
    "grouped": true,
    "row": true,
    "content": [{
        "type": "text",
        "value": "Die beiden wurden unterstützt durch das wunderbare Team des Coding da Vinci, die Kolleg*innen des Archivs der Arbeiterjugendbewegung und besonders durch die tatkräftige Mitarbeit der folgenden Personen:"
      },
      {
        "type": "image",
        "value": "B41ABEA7-64DA-4D8E-8E1B-F55A38DD6E37",
        "option": "second"
      },
      {
        "type": "text",
        "value": "Julia Kothe, Lars Tunçay, Nina Heinke, Felix Werthschulte, Luise & John",
        "option": "third"
      }]
    },
    {
      "grouped": true,
      "row": true,
      "content": [{
        "type": "text",
        "value": "Die Website richtet sich an all jene, die sich spielerisch mit dem Thema „Kinderrepublik“ und partizipativer Jugendarbeit in der ersten Hälfte des 20. Jahrhunderts beschäftigen wollen und erfahren möchten, wie solche Zeltlager als Form früher und praktischer Demokratiebildung funktioniert haben. In Zeiten wie jetzt, wo mehr und mehr Menschen sich von den demokratischen Institutionen abwenden, lohnt es sich, einen Blick zurückzuwerfen und zu schauen, wie Demokratiebildung insbesondere für bildungsfernere Schichten in der Vergangenheit funktioniert hat und inwiefern wir dafür etwas für unsere heutige Zeit lernen können."
      },
      {
        "type": "redirect",
        "value": "chapter/daheim",
        "option": "big",
        "title": "Beginne hier das Abenteuer!"
      }]
    }
  ]
};

export const Home = () => {

  return (
    <Chapter {...home} />
  );
};

export default Home;

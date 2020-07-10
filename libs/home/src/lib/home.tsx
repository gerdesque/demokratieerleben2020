import React from 'react';
import { Chapter } from '@gerdesque/ui';
import { ChapterProps } from '@gerdesque/data';
import './home.scss';

const home:ChapterProps = {
  link: "home",
  name: "Demokratie erLeben",
  groups: [{
    "grouped": false,
    "background": "2_31_b",
    "content": [{
      "type": "text",
      "value": "Diese Website erzählt die Geschichte von Anna, Karl und Gerda. Alle drei entstammen der Arbeiterklasse und träumen Ende der 1920er Jahre von einer besseren Zukunft. Begleitet sie auf ihrem Weg in ein Zeltlager der sozialdemokratischen Organisation der 'Reichsarbeitsgemeinschaft der Kinderfreunde'. In dieser so genannten 'Kinderrepublik' erleben sie viele spannende Dinge und lernen Demokratie durch eigenes Handeln kennen.",
      "option": "reveal"
    }]
  },
  {
    "grouped": true,
    "content": [{
      "type": "redirect",
      "value": "chapter/daheim",
      "option": "big",
      "title": "Beginne hier das Abenteuer!"
    },
    {
      "type": "image",
      "value": "02_1455_(114)",
      "option": "third"
    }
  ]
},
{
  "grouped": true,
    "content": [{
      "type": "text",
      "value": "Die Reise zur Kinderrepublik wäre für Anna, Karl und Gerda ohne Anne Mühlich und Gerd Müller nicht möglich gewesen. Im Rahmen des Kulturhackathons 'Coding da Vinci Westfalen-Ruhrgebiet' 2019 entwickelten die beiden diese Scrollytelling-Website, die auf Fotos und Material des Archivs der Arbeiterjugendbewegung basiert. 2020 haben sie im Rahmen eines Stipendiums des Coding da Vinci die Website für die Zwecke des Archivs ergänzt und ausgebaut."
    }]
  },
  {
    "grouped": true,
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
      "content": [{
        "type": "text",
        "value": "Die Website richtet sich an all jene, die sich spielerisch mit dem Thema „Kinderrepublik“ und partizipativer Jugendarbeit in der ersten Hälfte des 20. Jahrhunderts beschäftigen wollen und erfahren möchten, wie solche Zeltlager als Form früher und praktischer Demokratiebildung funktioniert haben. In Zeiten wie jetzt, wo mehr und mehr Menschen sich von den demokratischen Institutionen abwenden, lohnt es sich, einen Blick zurückzuwerfen und zu schauen, wie Demokratiebildung insbesondere für bildungsfernere Schichten in der Vergangenheit funktioniert hat und inwiefern wir dafür etwas für unsere heutige Zeit lernen können."
      },
      {
        "type": "text",
        "option": "link",
        "value": "Feedback, Ideen und Hinweise sind erwünscht und können an das <a href='mailto:archiv@arbeiterjugend.de' target='_blank' rel='noopener noreferrer'>Archiv der Arbeiterjugendbewegung</a> geschickt werden."
      }]
    },
    {
      "grouped": true,
      "content": [{
        "type": "text",
        "option": "link",
        "value": "Diese Website entstand im Rahmen des <a href='https://codingdavinci.de/' target='_blank' rel='noopener noreferrer'>Coding da Vinci Stipendiums</a> zwischen April und Juni 2020. Die Fotografien und Bildkärtchen wurden vom <a href='https://arbeiterjugend.de/' target='_blank' rel='noopener noreferrer'>Archiv der Arbeiterjugendbewegung</a> unter einer CC BY-SA 3.0 DE Lizenz zur Verfügung gestellt. Genutzt wurden zudem Sounds aus der Sammlung des <a href='http://www.soundsofchanges.eu/' target='_blank' rel='noopener noreferrer'>Sounds of Changes</a> Projektes (CC BY 4.0 Lizenz), der <a href='https://www.hoerspielbox.de/' target='_blank' rel='noopener noreferrer'>Hörspielbox</a> sowie  dem <a href='http://bbcsfx.acropolis.org.uk/' target='_blank' rel='noopener noreferrer'>BBC Sound Effects</a> Archiv. Genutzt wurde auch Bildmaterial von <a href='https://commons.wikimedia.org' target='_blank' rel='noopener noreferrer'>Wikimedia Commons</a>."
      },
      {
        "type": "text",
        "value":"Der Quellcode läuft unter einer MIT license. Die Geschichte und die eigens für das Projekt erstellten Mediendateien sind unter einer CC BY-SA 3.0 Lizenz veröffentlicht."
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

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
export default () => (
    <Card>
        <Title title="Willkommen zur Demokratie erLeben Administratoroberfläche" />
        <CardContent>Hier können Kapitel und deren Texte bearbeitet werden.</CardContent>
    </Card>
);

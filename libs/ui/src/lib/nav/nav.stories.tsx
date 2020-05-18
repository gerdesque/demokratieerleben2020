import React from 'react';
import { text } from "@storybook/addon-knobs";
import { BrowserRouter, Route } from 'react-router-dom';
import { Nav } from './nav';

export default { title: 'Design System/Atoms/Navigation' };

export const sidebar = () => (
  <BrowserRouter>
      <div className="app">
        <Nav chapters={[
          {"link": "intro"},
          {"link": "family"},
          {"link": "localgroup"}
        ]} />
      </div>
    </BrowserRouter>
);

"use client";

import React from 'react';
import ChromaGrid, { ChromaItem } from './ChromaGrid';

const items: ChromaItem[] = [
  {
    image: 'https://www.icecastleusa.com/favicon.ico',
    title: 'Ice Castle USA',
    subtitle: 'Managed hosting & cost optimization',
    url: 'https://www.icecastleusa.com/',
    borderColor: '#9AD2CB',
    gradient: 'linear-gradient(160deg, #9AD2CB, #1a2329)'
  },
  {
    image: '/Files/95986072.jpg',
    title: 'Forest Lake Ice Classic',
    subtitle: 'Event site — hosting & savings',
    url: 'https://ForestLakeIceClassic.com',
    borderColor: '#EBD494',
    gradient: 'linear-gradient(160deg, #EBD494, #1a2329)'
  },
  {
    image: 'https://avatars.githubusercontent.com/u/9919?s=200&v=4',
    title: 'GitHub / Open Source',
    subtitle: 'Repos & tooling',
    url: 'https://github.com/Austtiin',
    borderColor: '#9AD2CB',
    gradient: 'linear-gradient(160deg, #9AD2CB, #1a2329)'
  }
];

export default function ChromaGridWrapper() {
  return (
    <div className="w-full">
      <ChromaGrid items={items} className="mx-auto" radius={280} />
    </div>
  );
}

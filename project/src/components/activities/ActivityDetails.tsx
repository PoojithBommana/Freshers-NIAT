import React from "react";
import { useParams } from "react-router-dom";
import { activities } from "../../data/activities";

export function ActivityDetails() {

  interface Game {
    name: string;
    image: string;
    description: string;
    rulesLink: string;
  }

  const games: Game[] = [
    {
      name: "Table Tennis 🏓",
      image: "https://i.ibb.co/wJycJF8/DALL-E-2024-12-03-12-43-14-A-vibrant-4-K-landscape-scene-of-a-professional-table-tennis-match-in-act.webp",
      description: "Test your reflexes and skills in an intense game of table tennis.",
      rulesLink: "https://tabletennis.niat.tech/",
    },
    {
      name: "Chess ♟",
      image: "https://i.ibb.co/fXB3KYb/052ed777-8079-482c-bd9b-061722e09ed1.webp",
      description: "Showcase your strategic thinking in the classic game of chess.",
      rulesLink: "https://chessfresher.niat.tech/",
    },
    {
      name: "Foosball 🏉",
      image: "https://i.ibb.co/Gnz0VFc/fooseball.webp",
      description: "Fast-paced action awaits in this thrilling foosball challenge.",
      rulesLink: "https://fooseballfres.niat.tech/",
    },
    {
      name: "Carroms 🎴",
      image: "https://i.ibb.co/56rgNns/cda0a557-fbd5-4fc1-9356-88dba51d06a0.webp",
      description: "Skillfully pocket coins in this traditional and engaging game.",
      rulesLink: "https://carroms.niat.tech/",
    },
    {
      name: "Air Hockey 🏒",
      image: "https://i.ibb.co/52RqZpj/5f78e7d0-c459-46e1-bb48-a45d5d941428.webp",
      description: "Experience the excitement of fast-paced air hockey battles.",
      rulesLink: "https://airhocky.niat.tech/",
    },
  ];

  return (
    <div className="activity-details pt-4" style={{paddingTop:"8%"}}>
      

      <h3 className="text-2xl font-bold mb-4">Games:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{display: "flex",flexFlow: "row wrap", justifyContent: "center"}}>
        {games.map((game, index) => (
          <div key={index} className="game-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg" style={{width:"24%"}}>
            <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{game.name}</h2>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <a href={game.rulesLink} target="_blank" rel="noopener noreferrer">
                <button className="rules-btn bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700">
                  See Rules
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

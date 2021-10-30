import React from 'react';
import { RadarChart } from 'recharts'
import { PolarAngleAxis } from 'recharts';
import { PolarGrid } from 'recharts';
import { PolarRadiusAxis } from 'recharts';
import { Radar } from 'recharts';
import { Legend } from 'recharts';

/*Minimum 0 - Maximum 100*/

const data = [
    {
      "subject": "Language C",
      "A": 80,
      "B": 70,
      "fullMark": 150
    },
    {
      "subject": "Language Java",
      "A": 85,
      "B": 73,
      "fullMark": 150
    },
    {
      "subject": "HTML",
      "A": 75,
      "B": 75,
      "fullMark": 150
    },
    {
      "subject": "JavaScript",
      "A": 40,
      "B": 55,
      "fullMark": 150
    },
    {
      "subject": "React",
      "A": 50,
      "B": 45,
      "fullMark": 150
    },
    {
      "subject": "Base de donnée SQL",
      "A": 65,
      "B": 75,
      "fullMark": 150
    }
  ]


const WidgetOne = () => {
    return (
      
    <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Lucas" dataKey="A" stroke="#8884d8" fill="blue" fillOpacity={0.5} />
        <Radar name="Thibault" dataKey="B" stroke="#82ca9d" fill="green" fillOpacity={0.5} />
        <Legend />
    </RadarChart>
    );
};

export default WidgetOne;
import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import './pieChart.scss';

const SimplePieChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="pieChart">
      <PieChart>
        <text x={40} y={40} fill="#20253A" fontWeight={500} textAnchor="left" dominantBaseline="central">
          <tspan fontSize="15">Score</tspan>
        </text>
        <circle cx="50%" cy="50%" r="90" fill="#fff" />
        <Pie
          data={[data]}
          dataKey="score"
          innerRadius={90}
          outerRadius={100}
          startAngle={90}
          endAngle={((data.score * 360) + 90)}
        >
          {[data].map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill="#FF0000"
              cornerRadius="50%"
            />
          ))}
        </Pie>
        <text x="50%" y="50%" fill="#20253A" fontWeight={500} textAnchor="middle" dominantBaseline="central">
          <tspan x="50%" y="45%" fontSize="26">{data.score * 100}%</tspan>
          <tspan x="50%" y="54%" fontSize="16" fill='#74798C'>de votre</tspan>
          <tspan x="50%" y="62%" fontSize="16" fill='#74798C'>objectif</tspan>
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

SimplePieChart.propTypes = {
  data: PropTypes.shape({
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default SimplePieChart;

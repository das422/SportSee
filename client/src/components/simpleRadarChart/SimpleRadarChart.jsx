import React from 'react';
import PropTypes from 'prop-types';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import './radarChart.scss';

const SimpleRadarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="radarChart">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="70%"
        data={data}
        margin={{ top: 0, right: 30, bottom: 0, left: 30 }}
        startAngle={30}
        endAngle={-330}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          axisLine={false}
          dataKey="kind"
          tickLine={false}
          tick={{
            dy: 4,
            fill: "#fff",
            fontSize: 12,
          }}
        />
        <Radar dataKey="value" fill="#FF0000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

SimpleRadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SimpleRadarChart;

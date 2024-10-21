import PropTypes from "prop-types";
import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./lineChart.scss";

const SimpleLineChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload)
      return <p className="lineChart_tooltip">{`${payload[0].value} min`}</p>;
    return null;
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
  };

  const showOverlay = (e) => {
    let overlay = document.querySelector(".lineChart_overlay");

    if (e.isTooltipActive) {
      let windowWidth = overlay.offsetWidth;
      let mouseXpercent = Math.floor(
        (e.activeCoordinate.x / windowWidth) * 100
      );

      overlay.style.background = `linear-gradient(to right, rgb(255,0,0) ${mouseXpercent}%, rgba(0,0,0,0.1) ${mouseXpercent}%`;
    } else {
      overlay.style.background = "transparent";
    }
  };

  const hideOverlay = () => {
    let overlay = document.querySelector(".lineChart_overlay");
    overlay.style.background = "transparent";
  };

  return (
    <ResponsiveContainer width="100%" height="100%" className="lineChart">
      <div className="lineChart_overlay"></div>
      <LineChart
        data={data}
        margin={{
          top: 0,
          right: 20,
          left: 20,
          bottom: 20,
        }}
        onMouseMove={(e) => showOverlay(e)}
        onMouseOut={hideOverlay}
      >
        <text
          x={20}
          y={20}
          fill="#ffffff"
          opacity={0.5}
          fontWeight={500}
          textAnchor="left"
          dominantBaseline="central"
        >
          <tspan x={30} y={40} fontSize="15">
            Durée moyenne des
          </tspan>
          <tspan x={30} y={65} fontSize="15">
            sessions
          </tspan>
        </text>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: "clamp(1.5rem, 2vw, 2rem)",
            fontWeight: "500",
            fill: "#fff",
            opacity: "0.5",
          }}
        />
        <YAxis hide={true} domain={["dataMin - 20", "dataMax + 40"]} />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="session"
          stroke="#FBFBFB"
          dot={false}
          activeDot={{
            stroke: "rgba(255,255,255, 0.3)",
            strokeWidth: 10,
            r: 5,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

SimpleLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      session: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SimpleLineChart;

import PropTypes from 'prop-types';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './simpleBarChart.scss';

const SimpleBarChart = ({ data }) => {
    const LegendText = value => (
        <span style={{ color: "#74798C", marginRight: "20px", fontSize: "14px", fontWeight: 600 }}>
            {value}
        </span>
    );

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="barChartWrapper_tooltip">
                    <p>{`${payload[0].value}Kg`}</p>
                    <p>{`${payload[1].value}kCal`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='barChartWrapper'>
            <h2 className='barChartWrapper_title'>Activité quotidienne</h2>
            <ResponsiveContainer height="100%" width="100%">
                <BarChart
                    data={data}
                    barGap={8}
                    margin={{
                        top: 100,
                        right: 40,
                        left: 40,
                        bottom: 40,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={true} tickLine={false} tick={{ fontSize: '14px', fontWeight: '500' }} dy={15}/>
                    <YAxis yAxisId="kilogram" orientation="right" tickCount={3} axisLine={false} tickLine={false} tickMargin={30} type="number" tick={{ color: '9B9EAC', fontSize: '14px', fontWeight: '500' }} domain={["dataMin - 1", "dataMax + 2"]} />
                    <YAxis yAxisId="calories" hide={true} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
                    <Legend verticalAlign="top" align='right' iconSize={10} wrapperStyle={{ top: "2rem", right: 0 }} formatter={LegendText} />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={8} legendType="circle" name="Poids (Kg)" unit="Kg" radius={[20, 20, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={8} legendType="circle" name="Calories brûlées (kCal)" unit="Kcal" radius={[20, 20, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

SimpleBarChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            kilogram: PropTypes.number.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default SimpleBarChart;

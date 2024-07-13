import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
const AnalysisChart = () => {
    const [charts, setCharts] = useState(null);

    useEffect(() => {
        fetch('../../../public/SubadminChart.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => setCharts(data))
            .catch(error => console.error('Error fetching chart data:', error));
    }, []);

    if (!charts) return <div>Loading...</div>;

    return (
        <div className="chart-container">
            <div className="chart-wrapper">
                <div className='chart-bg' id="chart">
                    <ReactApexChart options={charts.options} series={charts.series} type="area" height={460} />
                </div>
            </div>
        </div>
    );
};

export default AnalysisChart;

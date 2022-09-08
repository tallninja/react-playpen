import './chart.scss';

import {
	AreaChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Area,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ name: 'January', total: 1200 },
	{ name: 'February', total: 2100 },
	{ name: 'March', total: 800 },
	{ name: 'April', total: 1600 },
	{ name: 'May', total: 900 },
	{ name: 'June', total: 1700 },
];

export const Chart = () => {
	return (
		<div className='chart'>
			<div className='title'>Last 6 Months revenue</div>
			<AreaChart
				width={730}
				height={344}
				data={data}
				margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
			>
				<defs>
					<linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
						<stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
					</linearGradient>
					<linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
						<stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
					</linearGradient>
				</defs>
				<XAxis dataKey='name' />
				{/* <YAxis /> */}
				<CartesianGrid strokeDasharray='3 3' className='chart-grid' />
				<Tooltip />
				<Area
					type='monotone'
					dataKey='total'
					stroke='#8884d8'
					fillOpacity={1}
					fill='url(#total)'
				/>
			</AreaChart>
		</div>
	);
};

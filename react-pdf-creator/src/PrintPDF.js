import React from 'react';
import ReactToPrint from 'react-to-print';

import Ticket from './Ticket';

class PrintPDF extends React.Component {
	render() {
		return (
			<div>
				<ReactToPrint
					content={() => this.componentRef}
					trigger={() => (
						<button className='btn btn-primary'>Print to PDF!</button>
					)}
				/>
				<Ticket ref={(response) => (this.componentRef = response)} />
			</div>
		);
	}
}

export default PrintPDF;

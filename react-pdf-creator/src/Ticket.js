import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { useEffect } from 'react';

const Ticket = () => {
	useEffect(() => {
		const initialValue = document.body.style.zoom;
		// Change zoom level on mount
		document.body.style.zoom = '100%';

		return () => {
			// Restore default value
			document.body.style.zoom = initialValue;
		};
	}, []);

	const downloadTicket = () => {
		const divToDisplay = document.getElementById('ticket');
		html2canvas(divToDisplay, {
			scale: 1,
		}).then(function (canvas) {
			const divImage = canvas.toDataURL('image/png');
			const pdf = new jsPDF({
				orientation: 'portrait',
				unit: 'cm',
				format: [15, 13.25],
			});
			pdf.addImage(divImage, 'PNG', 0, 0);
			pdf.save('download.pdf');
		});
	};

	return (
		<div className='d-flex justify-content-center align-items-center h-100'>
			<div id='ticket'>
				<div
					id='ticket-heading'
					className='d-flex justify-content-around align-content-center align-items-center bg-dark text-light p-3 w-auto'
				>
					<h1>
						<i className='fa-solid fa-bus'></i>
					</h1>
					<h1>Easy Coach</h1>
				</div>
				<div id='ticket-details' className='container p-3 w-100'>
					<div className='row h-100'>
						<div className='col-6 border-right'>
							<h3>Trip</h3>
							<hr />
							<table className='table table-borderless'>
								<tbody>
									<tr>
										<th>From</th>
										<td>Nairobi</td>
									</tr>
									<tr>
										<th>To</th>
										<td>Mombasa</td>
									</tr>
									<tr>
										<th>Bus</th>
										<td>KBP 123P</td>
									</tr>
									<tr>
										<th>Departure</th>
										<td>23-04-2022 8:00 AM</td>
									</tr>
									<tr>
										<th>Arrival</th>
										<td>23-04-2022 8:00 AM</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className='col-6'>
							<h3>Passenger</h3>
							<hr />
							<table className='table table-borderless'>
								<tbody>
									<tr>
										<th>Name</th>
										<td>Ernest Wambua</td>
									</tr>
									<tr>
										<th>Phone</th>
										<td>+254712345678</td>
									</tr>
								</tbody>
							</table>
							<div
								id='amount'
								className='bg-dark text-light d-flex justify-content-center h-auto p-3 mt-5'
							>
								<p className='h4'>Ksh 1000</p>
							</div>
						</div>
					</div>
				</div>
				<div className='d-flex justify-content-around align-content-center align-items-center bg-dark text-light p-1 w-auto'>
					<div>
						<img
							src={`${process.env.PUBLIC_URL}/assets/images/qr-code.svg`}
							alt='qr code'
							height='100'
							width='100'
						/>
					</div>
				</div>
			</div>

			<button className='btn btn-primary mt-5' onClick={downloadTicket}>
				Download
			</button>
		</div>
	);
};

export default Ticket;

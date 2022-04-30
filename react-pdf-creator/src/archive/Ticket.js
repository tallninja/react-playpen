import {
	Document,
	Page,
	StyleSheet,
	View,
	Text,
	Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
	top: {
		padding: '16px',
		display: 'flex',
		justifyContent: 'space-around',
		alignContent: 'center',
		backgroundColor: '#212529',
		color: '#FFF',
	},
	details: {
		padding: '16px',
		width: '100%',
	},
	bottom: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: '#212529',
		color: '#FFF',
	},
});

const Ticket = () => {
	return (
		<Document>
			<Page size={[500, 400]}>
				<View style={styles.top}>
					<Text>Easy Coach</Text>
				</View>
				<View style={styles.details}>
					<Text>Easy Coach</Text>
				</View>
				<View style={styles.bottom}>
					<Text>Easy Coach</Text>
				</View>
			</Page>
		</Document>
	);
};

export default Ticket;

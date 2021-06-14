import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 10,
	},
	button: {
		height: 40,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 12,
		fontWeight: "500",
		textTransform: "uppercase",
	},
	primary: {
		backgroundColor: "#171A20CC",
		color: "#FFFFFF",
	},
	secondary: {
		backgroundColor: "#FFFFFFA6",
		color: "#171A20",
	},
});

export default styles;

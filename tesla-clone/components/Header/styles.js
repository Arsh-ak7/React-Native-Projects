import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: 50,
		zIndex: 2,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		padding: 15,
	},
	logo: {
		width: 100,
		height: 20,
		resizeMode: "contain",
	},
	menu: {
		height: 25,
		width: 25,
		resizeMode: "contain",
	},
});

export default styles;

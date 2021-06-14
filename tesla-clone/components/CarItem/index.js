import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyleButton from "../StyledButton";
import styles from "./styles";

const CartItem = (props) => {
	const { name, tagline, image, taglineCTA } = props.car;
	return (
		<View style={styles.carContainer}>
			<ImageBackground source={image} style={styles.image} />
			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<StyleButton
					type='primary'
					content={"Custom Order"}
					onPress={() => {
						console.warn("Custom Order placed");
					}}
				/>
				<StyleButton
					type='secondary'
					content={"Existing Inventory"}
					onPress={() => {
						console.warn("Existing Inventory");
					}}
				/>
			</View>
		</View>
	);
};

export default CartItem;

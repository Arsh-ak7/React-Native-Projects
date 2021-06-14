import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyleButton = (props) => {
	const type = props.type;
	return (
		<View style={styles.container}>
			<Pressable
				style={
					type === "primary"
						? [
								styles.button,
								{ backgroundColor: styles.primary.backgroundColor },
						  ]
						: [
								styles.button,
								{ backgroundColor: styles.secondary.backgroundColor },
						  ]
				}
				onPress={props.onPress}>
				<Text
					style={
						type === "primary"
							? [styles.text, { color: styles.primary.color }]
							: [styles.text, { color: styles.secondary.color }]
					}>
					{props.content}
				</Text>
			</Pressable>
		</View>
	);
};

export default StyleButton;

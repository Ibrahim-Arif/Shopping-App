import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function SuccessfulAnimation({ onFinish }) {
  const [animation, setAnimation] = useState();

  const stop = () => {
    animation.reset();
    if (onFinish) onFinish(false);
  };
  const start = () => {
    if (animation) animation.play();
  };

  return (
    <View style={styles.container}>
      <LottieView
        ref={(animation) => {
          setAnimation(animation);
          start();
        }}
        loop={false}
        onAnimationFinish={() => stop()}
        source={require("../assets/successfulAnime.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    opacity: 0.8,
    zIndex: 1,
  },
});

export default SuccessfulAnimation;

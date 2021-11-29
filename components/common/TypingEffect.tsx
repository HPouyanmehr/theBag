// react
import * as React from 'react';
// react-typing-effect
import ReactTypingEffect, { ReactTypingEffectProps } from 'react-typing-effect';
// type
interface TypingEffectProps extends ReactTypingEffectProps {}

const TypingEffect: React.FunctionComponent<TypingEffectProps> = (props) => {
  const {
    eraseDelay = 2000,
    eraseSpeed = 100,
    speed = 200,
    typingDelay = 150,
    ...otherProps
  } = props;

  return (
    <ReactTypingEffect
      eraseDelay={eraseDelay}
      eraseSpeed={eraseSpeed}
      speed={speed}
      typingDelay={typingDelay}
      {...otherProps}
    />
  );
};

export default TypingEffect;

import { cloneElement, memo, ReactElement, useId } from "react";

const GradientIcon = ({ children }: { children: ReactElement }) => {
  const id = useId();
  const childWithGradient = cloneElement(children, {
    style: { ...children.props.style, fill: `url(#${id})` },
  });
  return (
    <>
      <svg width={0} height={0}>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1.3">
          <stop offset="0" stopColor="#CCE300"></stop>
          <stop offset="0.2" stopColor="#1EBC05"></stop>
          <stop offset="0.6" stopColor="#C2008E"></stop>
        </linearGradient>
      </svg>
      {childWithGradient}
    </>
  );
};

export default memo(GradientIcon);

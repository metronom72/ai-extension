import { FC, memo, ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
}

const GradientText: FC<GradientTextProps> = ({ children }) => {
  const gradientStyle: React.CSSProperties = {
    background: "linear-gradient(90deg, #CCE300 0%, #1EBC05 28%, #C2008E 60%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  return <span style={gradientStyle}>{children}</span>;
};

export default memo(GradientText);

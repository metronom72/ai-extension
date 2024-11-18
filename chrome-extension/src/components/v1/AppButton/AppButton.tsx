import { memo } from "react";
import { Button, ButtonProps } from "@mui/joy";

const AppButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      sx={{
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.01)",
        },
        ...props.sx,
      }}
      size={props.size || "lg"}
      variant={props.variant || "outlined"}
      color={props.color || "neutral"}
      startDecorator={props.startDecorator}
      endDecorator={props.endDecorator}
    >
      {props.children}
    </Button>
  );
};

export default memo(AppButton);

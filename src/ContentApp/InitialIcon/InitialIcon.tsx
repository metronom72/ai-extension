import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { memo } from "react";
import { CircularProgress, Fab } from "@mui/material";

const InitialIcon = ({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading?: boolean;
}) => {
  return (
    <Fab size="large" color="primary" onClick={onClick}>
      {loading ? <CircularProgress disableShrink /> : <CatchingPokemonIcon />}
    </Fab>
  );
};

export default memo(InitialIcon);

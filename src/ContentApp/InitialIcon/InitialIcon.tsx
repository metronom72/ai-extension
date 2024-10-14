import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { memo } from "react";
import { CircularProgress, Fab } from "@mui/material";
import { IconButton, Stack } from "@mui/joy";
import LLamaLogo from "./llama-logo.png";
import OpenAILogo from "./openai-logo.png";
import { useLLM } from "hooks/useLLM";

const InitialIcon = ({
  onClick,
  loading,
}: {
  onClick: () => void;
  loading?: boolean;
}) => {
  const { setLlmModel, llmModel } = useLLM();
  return (
    <Stack alignItems="center" justifyContent="space-between">
      <Fab size="large" color="primary" onClick={onClick}>
        {loading ? <CircularProgress disableShrink /> : <CatchingPokemonIcon />}
      </Fab>
      <Stack direction="row" pt={1}>
        <IconButton
          size={llmModel === "llama" ? "md" : "sm"}
          sx={{
            height: "2rem",
            padding: "5px",
            borderRadius: "50%",
            marginRight: 1,
          }}
          variant="outlined"
          onClick={() => setLlmModel("llama")}
          color={llmModel === "llama" ? "primary" : "neutral"}
        >
          <img
            src={LLamaLogo}
            style={{ display: "block", height: "100%" }}
            alt="Llama Logo"
          />
        </IconButton>
        <IconButton
          size={llmModel === "openai" ? "md" : "sm"}
          sx={{
            height: "2rem",
            padding: "5px",
            borderRadius: "50%",
          }}
          variant="outlined"
          onClick={() => setLlmModel("openai")}
          color={llmModel === "openai" ? "primary" : "neutral"}
        >
          <img
            src={OpenAILogo}
            style={{ display: "block", height: "100%" }}
            alt="OpenAI Logo"
          />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default memo(InitialIcon);

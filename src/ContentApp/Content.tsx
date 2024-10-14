import React, { memo, useCallback, useState } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import { IconButton, Stack } from "@mui/joy";
import InitialIcon from "./InitialIcon";
import useOpenAIQuery from "../hooks/useOpenAI";
import Summary from "./Summary";
import CloseIcon from "@mui/icons-material/Close";
import { useSemanticCore } from "hooks/useSematicCore";

const Content = () => {
  const {
    result: summary,
    loading,
    error,
    fetchOpenAI,
    cancelRequest,
  } = useOpenAIQuery();
  const [closed, setClosed] = useState<boolean>(false);
  const extractTextAndImages = useCallback(
    (element: HTMLElement): string => {
      let result = "";

      element.childNodes.forEach((node) => {
        if (node.nodeType === Node.COMMENT_NODE) {
          return;
        }

        if (node.nodeType === Node.ELEMENT_NODE) {
          const elem = node as HTMLElement;

          if (elem.tagName === "SCRIPT") {
            return;
          }

          if (elem.tagName === "IMG") {
            const img = elem as HTMLImageElement;
            result += `<img src="${img.src}" alt="${img.alt}" title="${img.title}" />`;
          } else {
            result += extractTextAndImages(elem);
          }
        } else if (node.nodeType === Node.TEXT_NODE && node.nodeValue?.trim()) {
          result += node.nodeValue.trim();
        }
      });

      return result;
    },
    [document.body.innerText],
  );

  const [prompt, _] = useState<string>(
    `Summarize following html, provide category and summarize title (JSON format): ${extractTextAndImages(document.body)}. 
    Retrieve preview url from page content, use logo as fallback.
    In JSON format {summary: <summary>, category: <category>, preview: <preview>, summaryTitle: <summaryTitle>}`,
  );

  const handleFetchSummary = useCallback(() => {
    fetchOpenAI(prompt);
  }, [prompt, fetchOpenAI]);

  const closeCallback = useCallback(() => {
    if (summary) {
      cancelRequest();
    } else {
      setClosed(true);
    }
  }, [summary, cancelRequest, setClosed]);
  const semanticCoreObj = useSemanticCore(document.body.innerText);

  if (closed) {
    return null;
  }

  console.log(semanticCoreObj);

  return (
    <MUIWrapper>
      <Stack
        direction="row"
        alignItems="flex-start"
        mr={2}
        mt={2}
        sx={{ position: "relative" }}
      >
        {summary ? (
          <Summary summary={summary} />
        ) : (
          <InitialIcon onClick={handleFetchSummary} loading={loading} />
        )}
        <IconButton
          sx={{ borderRadius: "50%" }}
          size="sm"
          onClick={closeCallback}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
    </MUIWrapper>
  );
};

export default memo(Content);

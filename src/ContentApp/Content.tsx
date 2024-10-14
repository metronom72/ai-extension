import React, { memo, useCallback, useState } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import { IconButton, Stack } from "@mui/joy";
import InitialIcon from "./InitialIcon";
import useOpenAIQuery from "hooks/useOpenAI";
import Summary from "./Summary";
import CloseIcon from "@mui/icons-material/Close";
import { usePageMetadata } from "../hooks/usePageMetadata";
import { LLMProvider } from "../providers/LLMProvider";

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
    `Summarize following html andprovide category (JSON format): ${extractTextAndImages(document.body)}. 
    In JSON format {summary: <summary>, category: <category>}`,
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
  const pageMetadata = usePageMetadata();

  if (closed) {
    return null;
  }

  return (
    <LLMProvider>
      <MUIWrapper>
        <Stack
          direction="row"
          alignItems="flex-start"
          mr={2}
          mt={2}
          sx={{ position: "relative" }}
        >
          {summary ? (
            <Summary summary={{ ...pageMetadata, ...summary }} />
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
    </LLMProvider>
  );
};

export default memo(Content);

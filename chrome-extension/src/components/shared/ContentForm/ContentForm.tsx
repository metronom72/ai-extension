import React, { memo, useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  Option,
  Select,
  Sheet,
  Stack,
  Textarea,
  Tooltip,
} from "@mui/joy";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import SendIcon from "@mui/icons-material/Send";
import GradientIcon from "components/v1/GradientIcon";
import AttachFileOutlined from "@mui/icons-material/AttachFileOutlined";
import { useFragment } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ContentForm_modelsFragment$key } from "components/shared/ContentForm/__generated__/ContentForm_modelsFragment.graphql";

const ContentForm = ({
  queryFragmentRef,
}: {
  queryFragmentRef: ContentForm_modelsFragment$key;
}): JSX.Element => {
  const { models } = useFragment(
    graphql`
      fragment ContentForm_modelsFragment on Query {
        models
      }
    `,
    queryFragmentRef,
  );
  const [model, setModel] = useState<string | null>(null);

  return (
    <Box p={2}>
      <Sheet
        variant="outlined"
        sx={{
          width: "100%",
          borderRadius: "8px 8px 8px 0px",
          boxShadow: "sm",
        }}
      >
        <Stack useFlexGap spacing={1}>
          <Stack
            justifyContent="flex-end"
            direction="row"
            alignItems="flex-end"
          >
            <Textarea
              variant="plain"
              minRows={1}
              size="sm"
              sx={{ width: "100%", paddingTop: 2, paddingBottom: 2 }}
              maxRows={6}
            />
            <Tooltip title="Attach file">
              <IconButton size="sm">
                <AttachFileOutlined />
              </IconButton>
            </Tooltip>
            <IconButton size="sm">
              <GradientIcon>
                <SendIcon />
              </GradientIcon>
            </IconButton>
          </Stack>
          <Divider sx={{ margin: 0 }} />
          <Box p={0.5} pt={0}>
            <Stack direction="row">
              <Stack direction="row">
                <Select
                  variant="plain"
                  placeholder="Select Model"
                  value={model}
                  size="sm"
                  slotProps={{
                    listbox: { disablePortal: true },
                  }}
                  onChange={(_, value) => setModel(value)}
                >
                  {models.map((model) => (
                    <Option key={model} value={model}>
                      {model}
                    </Option>
                  ))}
                </Select>
                <Tooltip title="Which model better for?">
                  <IconButton size="sm">
                    <HelpCenterOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Sheet>
    </Box>
  );
};

export default memo(ContentForm);

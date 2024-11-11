import React, { memo, useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
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
import useCreateConversation from "hooks/useCreateConversation";
import { AdapterEnum } from "hooks/__generated__/useCreateConversationMutation.graphql";
import { useForm } from "react-hook-form";

interface IFormInput {
  message: string;
  model: string;
  adapter: AdapterEnum;
}

const ContentForm = ({
  queryFragmentRef,
}: {
  queryFragmentRef: ContentForm_modelsFragment$key;
}): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormInput>({});
  const messageField = register("message", { required: true });
  const modelField = register("model", { required: true });
  const adapterField = register("adapter", { required: true });

  console.log(register("message", { required: true }));

  console.log(register("model", { required: true }));

  console.log(register("adapter", { required: true }));

  console.log(errors, getValues());

  const { models } = useFragment(
    graphql`
      fragment ContentForm_modelsFragment on Query {
        models
      }
    `,
    queryFragmentRef,
  );
  const [model, setModel] = useState<string | null>(null);
  const { mutate: createConversation, loading } = useCreateConversation();

  return (
    <Box
      p={2}
      component="form"
      onSubmit={handleSubmit((...rest) => console.log(rest))}
    >
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
            <FormControl error={Boolean(errors.message)} sx={{ width: "100%" }}>
              <Textarea
                variant="plain"
                size="sm"
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
                maxRows={6}
                onChange={(event) => messageField.onChange(event)}
              />
              {errors.message?.message && (
                <FormHelperText>{errors.message?.message}</FormHelperText>
              )}
            </FormControl>
            <Tooltip title="Attach file">
              <IconButton size="sm">
                <AttachFileOutlined />
              </IconButton>
            </Tooltip>
            <IconButton size="sm" type="submit">
              <GradientIcon>
                <SendIcon />
              </GradientIcon>
            </IconButton>
          </Stack>
          <Divider sx={{ margin: 0 }} />
          <Box p={0.5} pt={0}>
            <Stack direction="row">
              <Stack direction="row">
                <FormControl error={Boolean(errors.model)}>
                  <Select
                    variant="plain"
                    placeholder="Select Model"
                    value={model}
                    size="sm"
                    slotProps={{
                      listbox: { disablePortal: true },
                    }}
                    onChange={(event, value) =>
                      modelField.onChange({
                        target: { value },
                        type: event?.type,
                      })
                    }
                  >
                    {models.map((model) => (
                      <Option key={model} value={model}>
                        {model}
                      </Option>
                    ))}
                  </Select>
                  {errors.model?.message && (
                    <FormHelperText>{errors.model?.message}</FormHelperText>
                  )}
                </FormControl>
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

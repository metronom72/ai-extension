import React, { memo } from "react";
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
import { AdapterEnum } from "hooks/__generated__/useCreateConversationMutation.graphql";
import { useForm } from "react-hook-form";
import useCreateConversation from "../../../hooks/useCreateConversation";
import { v4 } from "uuid";
import getInnerText from "../../../libs/getInnerText";
import { contentId } from "../../../content";

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
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<IFormInput>({});
  const values = getValues();
  const { models } = useFragment(
    graphql`
      fragment ContentForm_modelsFragment on Query {
        models {
          model
          adapter
        }
      }
    `,
    queryFragmentRef,
  );
  const { mutate: createConversation, loading } = useCreateConversation();

  return (
    <Box
      p={2}
      component="form"
      onSubmit={handleSubmit((data) =>
        createConversation({
          conversationId: v4(),
          model: data.model,
          adapter: data.adapter,
          initialContent: getInnerText(window.document.body, contentId),
        }),
      )}
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
                value={values.message}
                maxRows={6}
                onChange={(event) => setValue("message", event.target.value)}
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
                    value={values.model}
                    size="sm"
                    slotProps={{
                      listbox: { disablePortal: true },
                    }}
                    onChange={(_, value) => {
                      if (value) {
                        setValue("model", value);

                        const targetModel = models.find(
                          ({ model }) => model === value,
                        );
                        if (targetModel) {
                          setValue("adapter", targetModel.adapter);
                        }
                      }
                    }}
                  >
                    {models.map((model) => (
                      <Option key={model.model} value={model.model}>
                        {model.model}
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

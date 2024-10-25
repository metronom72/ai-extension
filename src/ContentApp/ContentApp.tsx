import React, { memo } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import ContentArea from "components/shared/ContentArea";
import { Stack } from "@mui/joy";
import ContentHeader from "components/shared/ContentHeader";
import ContentForm from "components/shared/ContentForm";

const ContentApp = () => {
  return (
    <MUIWrapper>
      <Stack
        direction="row"
        sx={{ height: "100vh", position: "relative", backgroundColor: "white" }}
      >
        <Stack
          direction="column"
          sx={{
            flex: 1,
            position: "relative",
            justifyContent: "space-between",
          }}
        >
          <ContentHeader />
          <ContentArea />
          <ContentForm />
        </Stack>
        {/*<Sidebar />*/}
      </Stack>
    </MUIWrapper>
  );
};

export default memo(ContentApp);

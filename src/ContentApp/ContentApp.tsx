import React, { memo } from "react";
import MUIWrapper from "components/v1/MUIWrapper";
import ContentArea from "components/shared/ContentArea";
import Footer from "components/shared/Footer";
import { Stack } from "@mui/joy";

const ContentApp = () => {
  return (
    <MUIWrapper>
      <Stack direction="row" sx={{ height: "100vh", position: "relative" }}>
        <Stack direction="column" sx={{ flex: 1, position: "relative" }}>
          <ContentArea />
          <Footer />
        </Stack>
        {/*<Sidebar />*/}
      </Stack>
    </MUIWrapper>
  );
};

export default memo(ContentApp);

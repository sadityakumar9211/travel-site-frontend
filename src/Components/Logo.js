import { Box, Image } from "@chakra-ui/react";

import logo from "../Images/logo.jpg";

const Logo = () => {
  return (
    <>
      <Box>
        {/* box for logo */}
        <Image
          w={"99.35px"}
          h={"56px"}
          src = {logo}
        />
      </Box>
    </>
  );
};

export default Logo;

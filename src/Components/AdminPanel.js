import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import TeamMembers from "./TeamMembers";
import UpdateBanner from "./UpdateBanner";

export default function AdminPanel() {
  return (
    <>
      <Tabs>
        <TabList display={`flex`} justifyContent={`center`}>
          <Tab>Change Banner</Tab>

          <Tab>Add Admin</Tab>
        </TabList>

        <Box width={`60%`} m="auto">
          <TabPanels>
            <TabPanel>
              <UpdateBanner />
            </TabPanel>

            <TabPanel>
              <TeamMembers />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </>
  );
}

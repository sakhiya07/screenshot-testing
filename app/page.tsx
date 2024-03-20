'use client';
import { Box } from '@sprinklrjs/spaceweb/box';
import SpacewebProvider from '@sprinklrjs/spaceweb/spacewebProvider';

//light theme
import light from '@sprinklrjs/spaceweb-themes/hyperspace/light';

export default function Home() {
  return (
    <SpacewebProvider direction="ltr" theme={light}>
      <Box>Next App With Spaceweb</Box>
    </SpacewebProvider>
  );
}

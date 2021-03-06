'use strict';

import background from './background';
import getUserScreen from './getuserscreen';

background.on('screenRequest', (tab, respond) => {
  getUserScreen([ 'window', 'screen' ], tab)
    .then(streamId => respond({ type: 'success', payload: streamId }),
      () => respond({ type: 'failed', payload: { code: 'PERMISSION_DENIED' } }));
});

import { initFederation } from '@angular-architects/module-federation';

initFederation('mf.manifest.json')
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));

// run '$ember install active-model-adapter'

import ActiveModelAdapter from 'active-model-adapter';
 
export default ActiveModelAdapter.extend({
  host: 'http://localhost:3000/',
  namespace: 'api/vi'
})


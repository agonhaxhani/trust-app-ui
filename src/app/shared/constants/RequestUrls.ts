import {environment} from '../../../environments/environment';

export const RequestUrls = {
  AUTHENTICATION: {
    LOGIN: environment.api + '/admin/login'
  },

  ACCOUNT: {
    USERS: {
      BASE_API: environment.api + '/account_user/',
      CHANGE_PASSWORD: environment.api + '/account_user/change_password',
    },
    PRODUCT: {
      BASE_API: environment.api + '/content-manager/collection-types/application::product.product',
    },
  },
};

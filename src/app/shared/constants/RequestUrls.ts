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
      BASE_API: environment.api + '/products',
    },
    CONTACT: {
      BASE_API: environment.api + '/contacts',
    },
    PRODUCT_FILES: {
      BASE_API: environment.api + '/product-files'
    },
    FILE: {
      UPLOAD: environment.api + '/upload',
      DELETE_FILES: environment.api + '/upload/files',
    },
  },
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  companyName:'quadrant',
  cognito: {
    userPoolId: 'us-east-1_sbaJ1O6QQ',
    userPoolWebClientId: '1aenn6j7f08tn04ikdh0vtlngq',
  },
  usersService_getAllUsersURL : 'https://nlvd0cels6.execute-api.us-east-1.amazonaws.com/alpha/list_of_users/company_name?company_name=Quad',
  usersService_getUserbyEmailURL : 'https://nlvd0cels6.execute-api.us-east-1.amazonaws.com/alpha/get/email?email=shahed@quadrantresource.com',
  usersService_addNewUserURL : 'https://nlvd0cels6.execute-api.us-east-1.amazonaws.com/alpha/create',
  usersService_updateUserURL: 'https://nlvd0cels6.execute-api.us-east-1.amazonaws.com/alpha/update'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
let url = "";

let appName = "testing";
let appversion = '1.1.0';
let s3URL = '';
switch (appName) {
  case 'localHost':
    url = "http://192.168.0.135:8082/tape";
    break;
  case 'live':
    url = "http://tape.apmkingstrack.com:8082/tape";
    break;
  case 'static':
    url = 'http://103.210.74.168:8082/tape';
    break;
    case 'testing':
    url = 'http://testing.apmkingstrack.com:8082/tape/';
   s3URL = "https://kingstrackimages.s3.ap-southeast-1.amazonaws.com/";
    break;
    case 'liveSmart':
    url = 'https://smartvaahan.in/tape';
   s3URL = 'https://smartvaahan.s3.ap-south-1.amazonaws.com/';
    break;
}
export const ServerUrl = {
  live: url,
  appVersion : appversion,
  package : 'com.mvt.tape',
  s3URL: s3URL
}
export const environment = {
  production: false,

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

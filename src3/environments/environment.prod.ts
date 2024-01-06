// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
let url = "";

let appName = "live";

switch (appName) {
  case 'localHost':
    url = "http://192.168.0.109:8082/tape";
    break;
  case 'live':
    url = "http://apmkingstrack.com:9080/TapeManagement-0.0.1-SNAPSHOT";
    break;
  case 'static':
    url = 'http://192.168.1.13:8082/tape';
    break;

}
export const ServerUrl = {
  live: url
}
export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

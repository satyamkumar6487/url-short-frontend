import { subDomainList } from "./constant";
  

export const getApps = () => {
const subdomain = getSubDomain(window.location.hostname);
 const mainApp = subDomainList.find((app)  => app.main);
 if (subdomain === "") return mainApp.app;
const app = subDomainList.find((app) => app.subdomain === subdomain);
return app ? app.app : mainApp.app;

}


export const getSubDomain = (location) => {

  const locationParts = location.split(".");

  const  isLocalhost  = locationParts .slice(-1)[0] === "localhost";

  const sliceTill = isLocalhost ? -1 : -2;
  return locationParts.slice(0, sliceTill).join(".");

};






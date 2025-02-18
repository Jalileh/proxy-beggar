import { Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";



const LOCALHOST_SENDPROXIES = () => {
	 
}





const BuildDriver = (bGui = true) => {
   var build = new Builder().forBrowser("chrome");

   if (!bGui)
      build.setChromeOptions(new chrome.Options().addArguments("--headless"));

   return build.build();
};

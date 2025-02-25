import { Builder, Options } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";
import { _ProxyObj } from "../core/defines";



const LOCALHOST_SENDPROXIES = () => {
}





const BuildDriver = (bGui = true) => {
	var build = new Builder().forBrowser("chrome");

	if (!bGui) {
		const opt: any = new chrome.Options().addArguments("--headless");
		build.setChromeOptions(opt);
	}
	return build.build();
};

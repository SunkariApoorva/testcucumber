$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GithubLoginValid.feature");
formatter.feature({
  "line": 1,
  "name": "GitHub Login",
  "description": "",
  "id": "github-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 128608,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Enter Github Home Page",
  "description": "",
  "id": "github-login;enter-github-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open github",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters invalid username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should get the message \u0027Incorrect username or password\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User enters invalid password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should get the message \u0027Incorrect username or password\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should be Successfully LoggedIn",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginStepDefinition.open_github()"
});
formatter.result({
  "duration": 5720295843,
  "status": "passed"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_enter_invalid_username()"
});
formatter.result({
  "duration": 35267822,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 22 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027PUNHWD11659\u0027, ip: \u002710.220.57.12\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54488}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\sapoorva\\AppData\\Local\\Temp\\scoped_dir8608_22087}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 36b4894bb3501f859e2ede723bad6871\n*** Element info: {Using\u003did, value\u003dlogin_field}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.cg.github.stepdefinitions.GithubLoginStepDefinition.user_enter_invalid_username(GithubLoginStepDefinition.java:39)\r\n\tat ✽.When User enters invalid username(GithubLoginValid.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_should_get_the_message_Incorrect_username_or_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_enter_invalid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_should_get_the_message_Incorrect_username_or_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_should_be_successfully_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 33675,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Enter Github Home Page",
  "description": "",
  "id": "github-login;enter-github-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Open github",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters invalid username",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should get the message \u0027Incorrect username or password\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters invalid password",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User should get the message \u0027Incorrect username or password\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User enters valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be Successfully LoggedIn",
  "keyword": "Then "
});
formatter.match({
  "location": "GithubLoginStepDefinition.open_github()"
});
formatter.result({
  "duration": 3950236979,
  "status": "passed"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_enter_invalid_username()"
});
formatter.result({
  "duration": 5862416,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 6 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027PUNHWD11659\u0027, ip: \u002710.220.57.12\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_73\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:54507}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e), userDataDir\u003dC:\\Users\\sapoorva\\AppData\\Local\\Temp\\scoped_dir7900_8266}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bed0981a58b077d2b08cee5e6074fb09\n*** Element info: {Using\u003did, value\u003dlogin_field}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.cg.github.stepdefinitions.GithubLoginStepDefinition.user_enter_invalid_username(GithubLoginStepDefinition.java:39)\r\n\tat ✽.When User enters invalid username(GithubLoginValid.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_should_get_the_message_Incorrect_username_or_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_enter_invalid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_should_get_the_message_Incorrect_username_or_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_enter_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GithubLoginStepDefinition.user_should_be_successfully_logged_in()"
});
formatter.result({
  "status": "skipped"
});
});
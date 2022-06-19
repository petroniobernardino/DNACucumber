$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PortalLoja.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Execucoes automaticas do Customer DNA",
  "description": "Como Tester\r\nEu quero inserir dados no portal Lojas\r\nPara Utiliza-los nos testes",
  "id": "execucoes-automaticas-do-customer-dna",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 7,
  "name": "Deve validar os cartoes",
  "description": "",
  "id": "execucoes-automaticas-do-customer-dna;deve-validar-os-cartoes",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 8,
  "name": "Que acesso a pagina do Portal Loja",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "Informo o Usuario, senha e inicia a Sessao",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "Valido cartao",
  "keyword": "Entao "
});
formatter.match({
  "location": "ValidaCartoes.queAcessoAPaginaDoPortalLoja()"
});
formatter.result({
  "duration": 7121231600,
  "status": "passed"
});
formatter.match({
  "location": "ValidaCartoes.informoOUsuarioSenhaEIniciaASessao()"
});
formatter.result({
  "duration": 5331166500,
  "status": "passed"
});
formatter.match({
  "location": "ValidaCartoes.valido_cartao()"
});
formatter.result({
  "duration": 22971069900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#ctl00_ctl26_g_667f2fe6_09d7_4a3c_8221_cfb4ce44bab6_lblStateValue\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027NELT959\u0027, ip: \u002710.125.16.248\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\PETRON~1.BER\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:57123}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 61e92e42320ba471b08ca5b7745415be\n*** Element info: {Using\u003did, value\u003dctl00_ctl26_g_667f2fe6_09d7_4a3c_8221_cfb4ce44bab6_lblStateValue}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat ValidaCartoes.valido_cartao(ValidaCartoes.java:61)\r\n\tat ✽.Entao Valido cartao(PortalLoja.feature:10)\r\n",
  "status": "failed"
});
});
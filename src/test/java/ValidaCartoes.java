import static org.junit.Assert.assertEquals;

import java.io.FileReader;
import java.util.concurrent.TimeUnit;

import org.easetech.easytest.runner.DataDrivenTestRunner;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.opencsv.CSVReader;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

@RunWith(DataDrivenTestRunner.class)
public class ValidaCartoes {
	private WebDriver navegador;

	@Dado("^Que acesso a pagina do Portal Loja$")
	public void queAcessoAPaginaDoPortalLoja() throws Throwable {
		// Prepara o navegador
        System.setProperty("webdriver.chrome.driver","C:\\Worten\\Automacao\\chromedriver.exe");		
		navegador = new ChromeDriver();
		navegador.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		// Navegando para a página do Portal Loja
		navegador.get("http://cartaowortenlojapp");		
	}

	@Quando("^Informo o Usuario, senha e inicia a Sessao$")
	public void informoOUsuarioSenhaEIniciaASessao() throws Throwable {

		// Digitar no input id "ctl00_PlaceHolderMain_signInControl_UserName" o nome do Usuario "petronio"
		navegador.findElement(By.id("ctl00_PlaceHolderMain_signInControl_UserName")).sendKeys("petronio");

		// Digitar no input id "ctl00_PlaceHolderMain_signInControl_password" a Senha "Dominant20"
		navegador.findElement(By.id("ctl00_PlaceHolderMain_signInControl_password")).sendKeys("Dominant20");
		
		// Clicar no input de id "ctl00_PlaceHolderMain_signInControl_login" para Iniciar a Sessão
		navegador.findElement(By.id("ctl00_PlaceHolderMain_signInControl_login")).click();
	}
	
	@Entao("^Valido cartao$")
	public void valido_cartao() throws Throwable {

	}	
}

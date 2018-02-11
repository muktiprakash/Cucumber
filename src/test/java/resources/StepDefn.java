package resources;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefn {
	WebDriver driver;
@Given("^I am able to accesss the Magento page$")
public void i_am_able_to_accesss_the_Magento_page() throws Throwable {
	
	FirefoxOptions opt;
	opt=new FirefoxOptions();
	opt.setBinary("C:\\Program Files\\Mozilla Firefox\\firefox.exe");
    driver=new FirefoxDriver(opt);
    driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	driver.get("https://magento.com/");
	   
	
    //throw new PendingException();
}

@Given("^Am a registed user on Magento$")
public void am_a_registed_user_on_Magento() throws Throwable {
   
driver.findElement(By.linkText("MY ACCOUNT")).click();
	
    //throw new PendingException();
}
@When("^I am update the valid username as \"([^\"]*)\"$")
public void i_am_update_the_valid_username_as(String arg1) throws Throwable {
    
	 driver.findElement(By.id("email")).sendKeys(arg1);
}

@When("^I am update the valid password as \"([^\"]*)\"$")
public void i_am_update_the_valid_password_as(String arg1) throws Throwable {
	 driver.findElement(By.id("pass")).sendKeys(arg1);
}
//@When("^I am update the valid username as $")
//public void i_am_update_the_valid_username() throws Throwable {
//    driver.findElement(By.id("email")).sendKeys("balajidinakaran1@gmail.com");
//    
//    //throw new PendingException();
//}
//
//@When("^I am update the valid passwpord  $")
//public void i_am_update_the_valid_passwpord() throws Throwable {
//	
//	 driver.findElement(By.id("pass")).sendKeys("Welcome@1");
//
//}

@When("^I am able to click signIn btn$")
public void i_am_able_to_click_signIn_btn() throws Throwable {
   driver.findElement(By.id("send2")).click();
   // throw new PendingException();
}

@Then("^I should access/view the dashboard$")
public void i_should_access_view_the_dashboard() throws Throwable {
    
	
    //throw new PendingException();
}


}

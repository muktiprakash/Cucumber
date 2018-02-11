package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(dryRun=true,monochrome=true,
				features= {"src\\test\\java\\features\\Test.feature"},
				glue="resources",tags= {"@t1","~@t2"},
				format= {"pretty","html:test-outputs",
					"json:test.json"})
public class Runner {
	
}

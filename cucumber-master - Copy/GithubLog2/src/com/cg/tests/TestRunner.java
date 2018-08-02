package com.cg.tests;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//pretty is used to show ur feature file in console
		//plugin is used to hold the output in json|xml|html files automatically 
		plugin = {"pretty","json:Folder_Name/cucumber.json","html:folder/res.html","junit:junit-xml/out.xml"},
		//feature is defined to specify the path of feature file
		features= {"features"},
		//glue is defined to specify the path of step defined file
		glue= {"com.cg.github.stepdefinitions"} ,
		//dryRun is used to check mapping is proper between feature file and Step defination
		dryRun=false,
		//Strict will check if any step is not defined in step defination file
		strict=true,
		//monochrome is used to display the console output in proper readable format
		monochrome = true,
		//tags is used to group the scenarios
		
		tags= "@regression"
		
		)


public class TestRunner {

}

package com.ham.cmp.cucumber.stepdefs;

import com.ham.cmp.CmpApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = CmpApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}

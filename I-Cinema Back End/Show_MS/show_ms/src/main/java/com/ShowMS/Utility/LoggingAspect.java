package com.ShowMS.Utility;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@Aspect
@Component
public class LoggingAspect {

    private static final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    @Before("execution(* com.ShowMS.*.*Service.*(..))") // before any method in MovieService
    public void logBeforeMethod() {
        logger.info("Executing method...");
    }

    @After("execution(* com.ShowMS.*.*Service.*(..))") // after any method in MovieService
    public void logAfterMethod() {
        logger.info("Method execution completed.");
    }

    @AfterReturning(pointcut = "execution(* com.ShowMS.*.*Service.*(..))", returning = "result")
    public void logAfterReturning(Object result) {
        logger.info("Method executed successfully, result: {}", result);
    }

    @AfterThrowing(pointcut = "com.ShowMS.*.*Service.*(..))", throwing = "exception")
    public void logAfterThrowing(Exception exception) {
        logger.error("Method execution failed, exception: {}", exception.getMessage());
    }
}

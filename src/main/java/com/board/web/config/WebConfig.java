package com.board.web.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry registry) {
registry.addMapping("/api/**")
  .allowedOriginPatterns(
    "http://localhost:5173",
    "https://funfactory.dev",
    "https://www.funfactory.dev",
    "https://*.pages.dev"      // 프리뷰/브랜치 배포용
  )
  .allowedMethods("*")
  .allowedHeaders("*")
  .allowCredentials(true);

  }
}

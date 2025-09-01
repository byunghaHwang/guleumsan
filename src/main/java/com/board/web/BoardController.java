package com.board.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {

	@GetMapping("/api/data")
//	public Map<String, Object> test() {
//		
//		Map<String, Object> result = new HashMap<String, Object>();
//		
//		result.put("backTest", "안녕하세요~~~");
//		
//		return result;
//		
//	}
//	
	public String test() {
		return "Hello React!";
	}
}

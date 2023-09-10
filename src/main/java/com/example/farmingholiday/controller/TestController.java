package com.example.farmingholiday.controller;

import com.example.farmingholiday.dto.UserDto;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @PostMapping("/api/test")
    public String checkValidSignUp(@RequestBody UserDto signUpDto){
        return "백엔드에서 보내는 데이터 입니다.";
    }
}


package com.example.farmingholiday.controller;

import com.example.farmingholiday.dto.BlockFarmingHolidayDto;
import com.example.farmingholiday.dto.FarmingHolidayDto;
import com.example.farmingholiday.dto.HomePageDto;
import com.example.farmingholiday.dto.RecruitStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
public class HomeController {
    //TODO: 리뷰 평점 높은 순으로 정렬해서 리턴
    @GetMapping("/api/home")
    public HomePageDto getHomeInfo(){
        HomePageDto homePageDto = new HomePageDto();
        return homePageDto;
    }
}
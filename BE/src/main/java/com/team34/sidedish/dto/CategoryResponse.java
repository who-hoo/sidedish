package com.team34.sidedish.dto;

import java.util.List;

public class CategoryResponse {

    private Long id;
    private String name;
    private List<CategoryResponse> children;
}
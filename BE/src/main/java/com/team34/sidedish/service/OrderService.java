package com.team34.sidedish.service;

import com.team34.sidedish.domain.Dish;
import com.team34.sidedish.domain.Order;
import com.team34.sidedish.dto.OrderRequest;
import com.team34.sidedish.exception.OutOfStockException;
import com.team34.sidedish.repository.DishRepository;
import com.team34.sidedish.repository.OrderRepository;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final DishRepository dishRepository;

    public OrderService(OrderRepository orderRepository, DishRepository dishRepository) {
        this.orderRepository = orderRepository;
        this.dishRepository = dishRepository;
    }

    public void addOrder(OrderRequest orderRequest) {
        //orderRequest에서 quantity를 꺼냄
        Long dishId = orderRequest.getDishId();
        int quantity = orderRequest.getQuantity();
        //doshRepository에서 Dish를 orderRequest의 dishId를 통해서 꺼냄
        Dish dish = dishRepository.findById(dishId).orElseThrow();

        //꺼낸 Dish의 stock과 orderRequest의 quantity를 비교한다.
        if (dish.isOrderable(quantity)) {
            //DishTable에 감소된 stock을 업데이트 한다.
            dish.order(quantity);
            dishRepository.save(dish);
            //정상 작동하여 OrderTable에 데이터를 저장한다.
            Order order = orderRequest.toOrder();
            orderRepository.save(order);
            return;
        }
        //quantity가 stock을 초과하면 오류
        throw new OutOfStockException("재고가 부족합니다.");
    }
}

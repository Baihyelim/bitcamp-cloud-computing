package bitcamp.uml.classdiagram.ex2;

import java.util.List;

//Aggrgation(집합)
//=> 한 객체가 다른 객체를 포함하는 것을 표현한다.
//=> 포함하는 객체를 Container라고 부르고,
//		포함하는 객체를 Containee라고 부른다.
//=> Container와 Containee 의 라이프사이클이 다르다.
//		즉 Container(예: )
//		ㅇ

public class Order {
	
	// 포함할 객체는 필드로 선언한다.
	Customer customer;
	
	//여러 개를 포함할 경우 배열이나 collection객체로 구현한다.
	List<Product> products;

}

package bitcamp.uml.classdiagram.ex3;


//Composition(합성)
//=> 한 객체가 다른 객체를 포함하는 관계.
//=> Container와 Containee가 라이프사이클을 함께한다.




public class Member {
	
	//
	Address juso;
	
	public Member() {
		juso = new Address("11122", "기본주소", "상세주소");
	}

}

package bitcamp.pms.dao;

public class MemberDao {
	//static은 오직 한 함수에서만 볼 수 있는 변수를 만들때 쓴다.
	//static 변수는 함수 호출을 넘어 계속 되면,함수 호출 사이에 자료를 보존한다.
	static {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		}catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}

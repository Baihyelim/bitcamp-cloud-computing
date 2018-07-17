package bitcamp.pms.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import bitcamp.pms.domain.Member;

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
	
	String jdbcUrl;
	String username;
	String password;
	
	public MemberDao(
			String jdbcUrl,String username, String password) {
		this.jdbcUrl = jdbcUrl;
		this.username = username;
		this.password = password;
	}
	
	public List<Member> selectList() throws Exception{
		try(
				//sql 연결 URL 샘플코드 
				Connection con = DriverManager.getConnection(
						jdbcUrl, username,password);
				PreparedStatement stmt = con.prepareStatement(
						"select mid, email from pms2_member");
				ResultSet rs = stmt.executeQuery();) {
			
			ArrayList<Member> list = new ArrayList<>();
			while (rs.next()) {
				Member member = new Member();
				member.setId(rs.getString("mid"));
				member.setEmail(rs.getString("email"));
				list.add(member);
			}
			return list;
		}
	}
	
	public Member selectOne(String id) throws Exception{
		//selectOne: 상세정보 보기(select :고르다)
		try(
				Connection con = DriverManager.getConnection(
						jdbcUrl, username, password);
				PreparedStatement stmt = con.prepareStatement(
						//pms2_member에 있는 컬럼값id랑 이메일을가져오겠다
						"select mid,email from pms2_member where mid=?");){
			//?<-왜 하나일까?그 이유는 기준이 되는 컬럼 private mid가 가지고 있는 mid와 email을 가지고 있기 때문에
			//그 기준이 되는 mid를 클릭만하면 되기에 ?를 하나만 넣는 것
				stmt.setString(1, id);
				//
				
				try(ResultSet rs = stmt.executeQuery();){
					if (!rs.next()) {
						return null;
					}
					
					Member member = new Member();
					member.setId(rs.getString("mid"));
					member.setEmail(rs.getString("email"));
					return member;
				}
		}
	}
	
	public int update(Member member) throws Exception{
		try(
				Connection con =DriverManager.getConnection(jdbcUrl, username, password);
				PreparedStatement stmt = con.prepareStatement(
						"update pms2_member set email=? pwd=password(?) where mid=?");){
			
			stmt.setString(1, member.getEmail());
			stmt.setString(2, member.getPassword());
			stmt.setString(3, member.getMid());
			//DTO를 먼저 만들기...
			return stmt.executeUpdate();
		}
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}

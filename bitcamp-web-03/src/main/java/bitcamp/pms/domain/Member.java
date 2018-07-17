package bitcamp.pms.domain;

public class Member {
	//여기는 필드
	protected String mid;
	
	protected String email;
	
	protected String password;


	public Member() {
	
	//밑프로퍼티즈
	}
	public String getMid() {
		return mid;
	}
	public void setMid(String mid) {
		this.mid = mid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Member [mid=" + mid + ", email=" + email + ", password=" + password + "]";
	}

	
	
	
	
}


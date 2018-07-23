package bitcamp.pms.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@SuppressWarnings("serial")
@WebServlet("/member/view")
public class MemberViewServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//request 파라메터에 한글이 있는 경우는 setCharacterEncoding 메소드를 호출해야합니다.
		//★파라미터로 전달되는 데이터의 한글 처리
		 request.setCharacterEncoding("UTF-8");
		 //getParameter는 클라이언트 요청에 포함된 값을 꺼낼 때 사용됩니다.
		 //Parameter:매개변수
	        String id = request.getParameter("id");
	        
	        //servlet에서 한글을 사용하기 위해 파라미터로 전달되는 reponse객체의 
	        //setContentType 메소드를 호출해야 한다.
	        //response.setContentType메소드는 print 등 html을 출력하는 메소드 보다 먼저 위치해야 합니다.
	        //★브라우저로 보내지는 데이터의 한글 처리
	        response.setContentType("text/html;charset=UTF-8");
	        PrintWriter out = response.getWriter();
	        
	        out.println("<!DOCTYPE html>");
	        out.println("<html>");
	        out.println("<head>");
	        out.println("<meta charset='UTF-8'>");
	        out.println("<title>멤버 보기</title>");
	        out.println("</head>");
	        out.println("<body>");
	        out.println("<h1>멤버 보기</h1>");
	        out.println("<form action='update' method='post'>");
	        
	        
	        try {
	        	Class.forName("com.mysql.jdbc.Driver");
	            try (
	                Connection con = DriverManager.getConnection(
	                		"jdbc:mysql://13.125.229.224:3306/studydb",
	                        "study", "1111");
	                PreparedStatement stmt = con.prepareStatement(
	                    "select mid,email from pms2_member where mid=?");) {
	                
	                stmt.setString(1, id);
	                
	                try (ResultSet rs = stmt.executeQuery();) {
	                    if (!rs.next()) {
	                //throw new Exception("유효하지 않은 멤버 아이디입니다.");
	                    	//throw(던지다) new Exception(예외)
	                    	//:예외 던지기 예외를 던질때에는 메서드에
	                    	//throw Exception(던질 예외들)선언해줘야함
	                    	//여기서는 주석처리해놔서 던질 메서드가 없다.
	             out.println("<p>유효하지 않은 멤버 아이디입니다.</p>");
	            }
	             
	             //이줄도 추가했는데 어케 추가가 되었는지..;;
	            //out.println("<form action='update' method='post'>");
	            
	            
	            out.println("<table border='1'>");
	            out.println("<tr><th>아이디</th><td>");
	            out.printf("    <input type='text' name='id' value='%s' readonly></td></tr>\n", 
	                   rs.getString("mid"));
	            out.println("<tr><th>이메일</th>");
	            out.printf("    <td><input type='email' name='email' value='%s'></td></tr>\n",
	            		rs.getString("email"));
	            out.println("<tr><th>암호</th>");
	            out.println("    <td><input type='password' name='password'></td></tr>\n");
	            out.println("</table>");
	            out.println("<p>");
	            out.println("<a href='list'>목록</a>");
	            out.println("<button>변경</button>");
	            out.printf("<a href='delete?id=%s'>삭제</a>\n", id);
	            out.println("</p>");
	            out.println("</form>");
	            }
	        }
	               
	        } catch (Exception e) {
	            out.printf("<p>%s</p>\n", e.getMessage());
	            e.printStackTrace(out);
	        }
		
		
	            out.println("</body>");
	            out.println("</html>");
	}

}

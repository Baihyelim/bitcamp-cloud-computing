<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

${param.a} ${param.op} ${param.b} = 
<c:choose>
    <c:when test="${param.op == '+'}">${param.a + param.b} </c:when>
    <c:when test="${param.op == '-'}">${param.a - param.b} </c:when>
    <c:when test="${param.op == '*'}">${param.a * param.b} </c:when>
    <c:when test="${param.op == '/'}">${param.a / param.b} </c:when>
    <c:otherwise>해당 연산을 지원하지 않습니다.</c:otherwise>
</c:choose>

<!--jsp는 나중에 자바코드는 바뀌고 위에 출력문은 값으로 나오게 될것 -->
<%
Thread.currentThread().sleep(10000);
//스레드로 슬립한 것임->깨어나는 순간 클라이언트에게 출력되게 함->그래서 버퍼에도 출력되고 
//콘솔에도 출력되게함
%>
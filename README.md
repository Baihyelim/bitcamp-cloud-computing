# bitcamp-cloud-computing
비트캠프 클라우드 컴퓨팅 과정
 Web기본서
##web -01: 웹프로젝트 폴더 준비
- gardle을 이용하여 프로젝트 폴더를 만드는 방법

##web -02: 서블릿+JDBC
- 서블릿으로 웹 애플리케이션 만들고 배포하는 방법
- JDBC를 이용하여 데이터를 다루는 방법

##web -03: DAO + DTO(VO) + ServletContextListener
- 데이터 처리를 전문으로 하는 DAO 객체를 도입
-ServletContextListener에서 DAO객체를 준비한다.
-ServletContext 보관소에 DAO 객체를 저장한다.
-서블릿은 ServletContext 보관소에서 DAO를 꺼내 사용한다.

##web -04: 서블릿 +DAO+ JSP= MVC 아키텍쳐
-JSP 기술을 사용하여 출력을 단순화하는 방법
-MVC 아키텍처의 개념

##web -05: Persistence Framework 도입
-DAO에 mybatis 프레임워크를 적용하여 코드와 SQL문을 분리한다.
-반복적으로 작성했던 JDBC 코드를 캡슐화한다.

##Web -06:Front Controller 도입
-서블릿들이 공통으로 수행하는 작업을 프론트 컨트롤러에게 맡긴다.
-나머지 서블릿들은 "Page Controller"로 부른다.


##Web -07:Page controller를 POJO로 변환
-프론트 컨트롤러가 도입되면 페이지 컨트롤러는 일반 자바 객체로 만들어도 된다. 

##Web -08: 애노테이션으로 요청 핸들러 다루기
-요청 핸들러(Request Handler): 클라이언트 요청이 들어왔을때 호출되는 메서드이다. 즉 클라이언트 요청을 
처리하는 메서드.
-인터페이스를 구현하는 대신에 애노테이션으로 요청 핸들러를 표시하여 프론트 컨트롤러가 찾게 한다.
-이렇게 함으로써 페이지 컨트롤러를 만들 때 특정 인터페이스에 종속되지 않게 한다.

##Web -09: 객체생성을 자동화하기 위해 IoC 컨테이너를 만들기 
-IoC 컨테이너를 통해 페이지 컨트롤러의 객체를 자동 생성한다.
-페이지 컨트롤러의 의존 객체를 자동으로 주입한다.

##Web -10: Spring IoC 컨테이너 도입
-기존 직접만든 IoC 컨테이너 대신에 스프링 컨테이너를 사용한다. 

##라이브러리 추가 
-mvnrepository.com 에서 Spring-context 라이브러리를 찾는다 
-bulid.gradle에 의존 라이브러리 정보를 추가한다.
-'gradle cleanEclipse'를 실행하여 기존 이클립스 설정을 제거한다.
-'gradle eclipse'를 실행하여 이클립스 관련 설정 파일을 새로 만든다.
-이때 추가한 의존 라이브러리가 자동으로 다운로드 될것이다
-웹 프로젝트를 리프레쉬 하여 라이브러리 정보를 갱신한다.

## ContextLoaderListener에서 Spring IoC 컨테이너 준비하기
-기존에 ApplicateionContext 대신에 Spring IoC 컨테이너 객체를 생성한다.
-bitcamp/pms/config/applicateion-context.xml 파일을 생성한다.

## DispatcherServlet에서 Spring IoC 컨테이너 사용하기
-기존의 ApplicationContext 대신에 Spring IoC 컨테이너에 들어있는 페이지 컨트롤러를 찾아 실행한다.

## ApplicationContext 클래스 제거한다.

## 우리가 작성한 에노테이션 제거한다.
-@Component 애노테이션 제거
-@Controller 애노테이션 제거
-@Repository 애노테이션 제거
-@Autoworied 애노테이션 제거

## DAO와 페이지 컨트롤러에서 사용한 애노테이션 패키지를 변경한다.
-스프링 에노테이션으로 변경한다.

## web-11:Spring +Mybatis연동하기
-기존에 직접 만든 SqlSessionFactoryBean 대신에 MYbatis가 제공하는 
SqlSessionFactory 대신에 Spring에서 관리한다.
-DB커넥션 풀은 Mybatis대신에 Spring에서 관리한다.
-트랜잭션을 다룰 수 있는도록 트랜젝션 관리자를 설정한다.
-





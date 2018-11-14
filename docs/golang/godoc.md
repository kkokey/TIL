## godoc 명령어 기본 사용법 및 결과 페이지에 대한 정리

local에서 원하는 프로젝트를 godoc 문서로 출력하는 명령어
터미널에서 아래 명령어를 치고 웹에서 localhost:8000 또는 127.0.0.1:8000 으로 godoc을 통해 만들어진 웹 문서를 볼 수 있습니다. 

기본 명령어
godoc -http=:8000 -v -goroot $GOPATH/src/github.com/.../...
(기본 명령어의 goroot 경로에 대한 부분은 변경될 수 있습니다.)


godoc을 사용하여 웹 문서를 생성하면 https://golang.org/ 과 같은 페이지가 생성 됩니다.

각각 Documents, Packages, The Project, Help, Blog, 검색창이 나오게 되는데 각 메뉴 별로 상단에 -goroot 에서 설정한 경로의 폴더로 매칭이 됩니다.
<pre><code>
폴더	메뉴
doc	Documents
pkg	Packages
project	The Project
help	Help
</code></pre>
- 각각의 폴더가 없으면 오류 메시지를 보여줍니다.

기본적으로 package 의 주석은 아래처럼 package 의 상단에 적어주시면 됩니다.
##### > package의 상단 주석 예제
<pre><code>
// p2p network communication package in server.
package p2p
</code></pre>

같은 패키지에 있는 모든 파일의 상단에 패키지 주석을 적으시면 여러개의 주석이 한꺼번에 표시 됩니다.

##### > const의 상단 주석 예제
<pre><code>
// Node Buffer Size
//
// Define ReadBuffer
const ReadBufferSize = 1024
</code></pre>

##### > method의 상단 주석 예제
<pre><code>
// Create new server object
func NewServer(ip string, port int) *Server {
	return &Server{
		ip:       ip,
		port:     port,
		closing:  make(chan bool),
		closed:   make(chan bool),
		Ready:    make(chan bool),
		Accepted: make(chan *Peer),
	}
}
</code></pre>

##### Reference
- http://elliot.land/post/godoc-tips-tricks


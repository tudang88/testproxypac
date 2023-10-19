from simple_http_server import route, server
    
@route("/")
def index():
    return {"hello": "world"}   

@route("/proxy.pac")
def proxy_pac():
    return "PROXY 192.168.0.199:8080"
server.start(port=9000)
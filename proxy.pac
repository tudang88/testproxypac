function FindProxyForURL(url, host) 
{
    if (dnsDomainIs(host, "japantaxfree.com")) {
        return "DIRECT";
    } else {
        return "PROXY 192.168.0.199:8080";
    }
}
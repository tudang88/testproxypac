function FindProxyForURL(url, host) 
{
    // if (dnsDomainIs(host, "japantaxfree.com")) {
    //     return "DIRECT";
    // } else {
    //     return "PROXY 192.168.0.199:8080";
    // }

    if (dnsDomainIs(host, "118.70.133.189")) {
        return "PROXY 192.168.0.199:8080";
    } else {
        return "DIRECT";
    }
}
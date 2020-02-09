function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, ".granbluefantasy.jp")) {
        return "PROXY gbf-proxy.kogane.moe:80";
    }
    return "DIRECT";
}

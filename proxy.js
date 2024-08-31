function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*discord*") || shExpMatch(host, "*wa.me*") || shExpMatch(host, "*whatsapp.com*") || shExpMatch(host, "*facebook.com*") ||  shExpMatch(host, "*dropbox.com*") || shExpMatch(host, "*onedrive.com*"))
    return "DIRECT";
  if (shExpMatch(host, "prod.qualplacar.top*"))
    return "PROXY 152.70.217.36:8899";
  return "DIRECT";
}

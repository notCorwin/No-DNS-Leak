function main(config) {
  const include = /新加坡/i;

  config.proxies = (config.proxies || []).filter(
    proxy => include.test(proxy.name)
  );

  return config;
}

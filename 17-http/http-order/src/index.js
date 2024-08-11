function run(requests) {
  return requests.map((request) => {
    if (request.trim() === '' || !request.includes(' ')) return request;

    let [method, path, protocol] = ['', '', ''];

    request.split(' ').forEach((component) => {
      if (component.startsWith('HTTP/')) {
        protocol = component;
      } else if (component.startsWith('/')) {
        path = component;
      } else {
        method = component;
      }
    });

    return `${method} ${path} ${protocol}`;
  });
}

// WARN: do not remove this line
module.exports = run;

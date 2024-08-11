const { XMLHttpRequest } = require('xmlhttprequest');

async function getPostData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

    xhr.onload = () => {
      if (xhr.status === 200) resolve(JSON.parse(xhr.responseText));
      reject(new Error(`Failed wih status code: ${xhr.status}`));
    };

    xhr.onerror = () => {
      reject(new Error('Something is wrong with the request!'));
    };

    xhr.send();
  });
}

// WARN: do not remove this line
module.exports = getPostData;

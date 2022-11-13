export const request = (value, setValue) => {
  fetch(`https://topkur.de/ru/call-request`, {
    method: 'POST',
    body: JSON.stringify({ telephone: value }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setValue(data);
    })
    .catch((error) => {
      setValue(error);
    });
};

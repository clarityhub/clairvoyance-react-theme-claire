import xhr from 'xhr';

const checkAvailable = (email, yes, no) => {
  xhr({
    method: 'post',
    body: JSON.stringify({
      email,
    }),
    // TODO not ideal, we should inject this in from main
    url: `${process.env.REACT_APP_API_URL}/accounts/email/available`,
    headers: {
      'Content-Type': 'application/json',
    },
  }, (err, resp, body) => {
    if (err || resp.statusCode >= 400) {
      no();
    } else {
      const available = JSON.parse(body).available;
      available ? yes() : no();
    }
  });
};

export default checkAvailable;

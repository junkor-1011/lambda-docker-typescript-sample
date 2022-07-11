import axios from 'axios';

const url = 'http://checkip.amazonaws.com/';

export default async function () {
  const ret = await axios(url);
  return ret.data.trim();
}

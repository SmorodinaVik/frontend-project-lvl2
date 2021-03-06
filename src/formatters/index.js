import stylish from './stylish.js';
import plain from './plain.js';

const formatter = {
  stylish,
  plain,
  json: JSON.stringify,
};

export default (data, format) => formatter[format](data);

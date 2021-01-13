'use strict';

module.exports = {
  pr: {
    state: { type: 'number', required: true, example: 200, description: '状态码' },
    result: { type: 'string', required: true, description: '返回值' },
    mess: { type: 'string', required: true, example: '查询成功', description: '返回信息' },
  },
};

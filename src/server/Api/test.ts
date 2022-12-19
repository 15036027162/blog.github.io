
import request from "../request"

/**
 * @description: 测速数据
 * @return {Promise}
 */

export const getMenu = () => {
  return request({
    url: '/MenuList ',
    method: 'get',
  })
}

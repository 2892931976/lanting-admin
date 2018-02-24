import { isUrl } from '../utils/utils';

const menuData = [{
  name: '酒店概况',
  icon: 'iconfont icon-hotel',
  path: 'hotel',
  children: [{
    name: '酒店简介',
    icon: 'iconfont icon-general',
    path: 'general',
  }, {
    name: '交通指引',
    icon: 'iconfont icon-address',
    path: 'address',
  }, {
    name: '招聘信息',
    icon: 'iconfont icon-jobs',
    path: 'jobs',
  }, {
    name: '友情链接',
    icon: 'iconfont icon-links',
    path: 'links',
  }, {
    name: '联系我们',
    icon: 'iconfont icon-contact',
    path: 'contact',
  }],
}, {
  name: '客房管理',
  icon: 'form',
  path: 'form',
  children: [{
    name: '客房设施',
    path: 'basic-form',
  }, {
    name: '客房管理',
    path: 'step-form',
  }],
}, {
  name: '会议宴会',
  icon: 'table',
  path: 'list',
  children: [{
    name: '会议场地',
    path: 'table-list',
  }, {
    name: '宴会服务',
    path: 'basic-list',
  }],
}, {
  name: '休闲娱乐',
  icon: 'profile',
  path: 'profile',
}, {
  name: '餐饮美食',
  icon: 'check-circle-o',
  path: 'result',
  children: [{
    name: '酒店餐厅',
    path: 'success',
  }, {
    name: '菜肴菜品',
    path: 'fail',
  }],
}, {
  name: '城市指南',
  icon: 'warning',
  path: 'exception',
  children: [{
    name: '城市介绍',
    path: '403',
  }, {
    name: '名胜景点',
    path: '404',
  }, {
    name: '特色美食',
    path: '500',
  }, {
    name: '购物中心',
    path: 'trigger',
    hideInMenu: true,
  }, {
    name: '休闲娱乐',
    path: 'trigger',
    hideInMenu: true,
  }],
}, {
  name: '图片轮播',
  icon: 'user',
  path: 'user',
  authority: 'guest',
}, {
  name: '搜索优化',
  icon: 'warning',
  path: 'exception',
}, {
  name: '系统设置',
  icon: 'warning',
  path: 'exception',
  children: [{
    name: '用户管理',
    path: '403',
  }, {
    name: '系统日志',
    path: '404',
  }],
}];

function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);

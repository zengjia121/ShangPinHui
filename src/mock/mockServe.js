import Mock from 'mockjs';
import banner from './banner.json'
import floor from './floor.json'

// console.log(banner)
// mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/banner', { code: 200, data: banner });
Mock.mock('/mock/floor', { code: 200, data: floor });
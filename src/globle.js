import { marked } from 'marked'          //将markdown字符串转换为HTML
import DOMPurify from "dompurify"        //防止危险的html标记被渲染

const globalMixin = {
  methods: {
    //将markdown格式的字符串安全的转换为html字符串
    praseMARK(str) {
      return DOMPurify.sanitize(marked(str));
    }
  }
}

const idCard = /(\d{4})\d*([0-9a-zA-Z]{4})/
const phone = /^(\d{3})\d{4}(\d{4})$/
const name2 = /^(.).+$/
const name3 = /^(.+).(.)$/
const email = /(.{0,3}).*@(.*)/
 
 
function tmIdCard(val) {
  return val.replace(idCard, "$1******$2")
}
 
function tmPhone(val) {
  return val.replace(phone, "$1******$2")
}
 
function tmName(val) {
  if (val && val.length == 2) {
    return val.replace(name2, "$1*")
  } else if (val && val.length > 2) {
    return val.replace(name3, "$1*$2")
  } else {
    return val
  }
}

/**
 * 邮箱脱敏
 * @param {*} val 
 * @returns 
 */
function tmEmail(val) {
  return val.replace(email, "$1***@$2")
}

export default {
  globalMixin,
  tmIdCard,
  tmName,
  tmPhone,
  tmEmail
}
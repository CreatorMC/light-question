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

export default globalMixin
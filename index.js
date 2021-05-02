const Application = require('@waline/vercel');

module.exports = Application({
  async postSave(comment) {
    // do what ever you want after save comment
  },
  const contentQQ =
      think.config('QQTemplate') ||
      `💬 {{site.name|safe}} 有新评论啦
{{self.nick}} 评论道：
{{self.comment}}
邮箱：{{self.mail}}
状态：{{self.status}} 
仅供评论预览，查看完整內容：
{{site.postUrl}}`;

    return request({
      uri: `https://push.xuthus.cc/group/${QMSG_KEY}`,
      method: 'POST',
      form: {
        c: nunjucks.renderString(contentQQ, data),
        qq: QQ_ID,
      },
    });
  }
});

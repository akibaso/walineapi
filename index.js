const Application = require('@waline/vercel');

module.exports = Application({
  async postSave(comment) {
    // do what ever you want after save comment
  },
  async postSave(comment, pComment) {
    if(pComment != null)
    {
      var content = '「 OkYes博客 」有新回复了'+'\r\n'+'${comment.nick} 对 ${pComment.nick} 在 ${comment.url} 说到:'+'\r\n'+'${comment.comment}'
    }
    else{
      var content = '「 OkYes博客 」有新评论了'+'\r\n'+'${comment.nick} 在 ${comment.url} 说到:'+'\r\n'+'${comment.comment}'
    }
    const https = require('https')
    const options = {
      hostname: 'push.xuthus.cc',
      port: 443,
      path: '/group/f2fe04df897fc705ad0888bca97a51f9?c='+content,
      method: 'GET'
    }

    const req = https.request(options, res => {
      console.log(`状态码: ${res.statusCode}`)

     res.on('data', d => {
      process.stdout.write(d)
     })
    })

    req.on('error', error => {
     console.error(error)
    })

    req.end()
  },
});

// 配置
window.Config = {

  // 站点名
  SiteName: '寒曦朦的服务器',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见说明
  ApiDomain: 'uptime-status.qikaile.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm789938357-0d7fda65185b4bc65ef9c99d',
    'm789938291-ab2c94ee57521c09a064c728',
    'm789938295-cfbf28e05735b746b4925289',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 7,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://mon.hanximeng.com/'
    },
    {
      text: 'Blog',
      url: 'https://hanximeng.com/'
    }
  ]
};

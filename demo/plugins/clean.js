// 假设用户要支持自定义的clean的命令，
// 这里的plugins文件夹，讲道理不是放这的，这里只是写的demo

module.exports = (options) => (api) => {
  console.log('options:', options);
  api.registerCommands('clean', (...args) => {
    // clean命令的逻辑
    console.log('exec clean script success')
  })
}
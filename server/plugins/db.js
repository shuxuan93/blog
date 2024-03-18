module.exports = (app) => {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://127.0.0.1:27017/BLOG", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  var db = mongoose.connection; //获取connection实例
  //使用Connetion监听连接状态
  db.on("connected", function (err) {
    if (err) {
      console.log("连接数据库失败：" + err);
    } else {
      console.log("连接数据库成功！");
    }
  });
};

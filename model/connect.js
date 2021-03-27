const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("数据库连接成功"))
  .catch(() => console.log("数据库连接失败"));

// mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`, { useNewUrlParser: true })
//     .then(() => console.log('数据库连接成功'))
//     .catch(() => console.log('数据库连接失败'))

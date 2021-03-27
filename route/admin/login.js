const bcrypt = require("bcrypt");

const { User } = require("../../model/user.js");

const login = async (req, res) => {
  const { email, password } = req.body;
  // if (email.trim().length == 0 || password.trim().length == 0) {
  //     return res.status(400).send('<h4>邮件地址或者密码错误</h4>')
  // }
  if (email.trim().length == 0 || password.trim().length == 0) {
    return res
      .status(400)
      .render("admin/error", { msg: "邮件地址或者密码错误" });
  }
  let user = await User.findOne({ email });
  if (user) {
    let isValid = await bcrypt.compare(password, user.password);
    if (isValid) {

      // 将用户名存储在请求对象中
      req.session.username = user.username;

      // 将用户角色存储在session对象中
      req.session.role = user.role;

      // res.send('登录成功');
      
      req.app.locals.userInfo = user;

      // 对用户的角色进行判断
      if (user.role == "admin") {
        // 重定向到用户列表页面
        res.redirect("/admin/user");
      } else {
        // 重定向到博客首页
        res.redirect("/home/");
      }
    } else {
      res.status(400).render("admin/error", { msg: "邮件地址或者密码错误" });
    }
  } else {
    res.status(400).render("admin/error", { msg: "邮件地址或者密码错误" });
  }
};

module.exports = login;

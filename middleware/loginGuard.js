const guard = (req, res, next) => {
  if (req.url != "/login" && !req.session.username) {
    res.redirect("/admin/login");
  } else {
    if (req.session.role == "normal") {
      // 让它跳转到博客首页 阻止程序向下执行
      return res.redirect("/home/");
    }
    // 用户是登录状态 将请求放行
    next();
  }
};

module.exports = guard;

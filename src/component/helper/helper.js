import Cookies from "universal-cookie";
import axios from "axios";

const helpers = {
  isLogin: function () {
    let isLoginedin = false;
    const cookies = new Cookies();

    if (
      localStorage.getItem("id") != null &&
      localStorage.getItem("user_name") != null
    ) {
      isLoginedin = true;
    } else if (cookies.get("id") && cookies.get("user_name")) {
      isLoginedin = true;
    }
    return isLoginedin;
  },
  isAdmin: function () {
    let is_Admin = false;
    const cookies = new Cookies();

    if (
      localStorage.getItem("is_admin") !== null &&
      localStorage.getItem("is_admin") === "on"
    ) {
      is_Admin = true;
    } else if (cookies.get("is_admin") && cookies.get("is_admin") === "on") {
      is_Admin = true;
    }
    return is_Admin;
  },
  logOut: function () {
    const unicookies = new Cookies();
    for (var item in unicookies.getAll()) {
      unicookies.remove(item);
      this.clearCoockies(item);
    }
    localStorage.clear();
    // navigate("/");
  },
  clearCoockies: function (name) {
    // This function will attempt to remove a cookie from all paths.
    var pathBits = window.location.pathname.split("/");
    var pathCurrent = " path=";

    // do a simple pathless delete first.
    document.cookie = name + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT;";

    for (var i = 0; i < pathBits.length; i++) {
      pathCurrent += (pathCurrent.substr(-1) !== "/" ? "/" : "") + pathBits[i];
      document.cookie =
        name + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT;" + pathCurrent + ";";
    }
  },
  setPermission: function () {
    let user_id = null;
    const cookies = new Cookies();
    if (localStorage.getItem("id") != null) {
      user_id = localStorage.getItem("id");
    } else if (cookies.get("id")) {
      user_id = cookies.get("id");
    }

    let isSuccess = false;

    axios
      .post(
        "http://barcodesystem.in/upgradecrm/restapi/auth.php?action=getPermisions",
        {
          user_id: user_id,
        }
      )
      .then((response) => {
        if (response.data.success === true) {
          cookies.set("now_is_admin", response.data.data.is_admin, {
            path: `/`,
            maxAge: 3600,
          });
          cookies.set("now_is_active", response.data.data.status, {
            path: `/`,
            maxAge: 3600,
          });
          response.data.data.setype.forEach((setypeitem) => {
            cookies.set(setypeitem, "yes", {
              path: `/`,
              maxAge: 3600,
            });
          });
          if (response.data.data.status === "inactive") {
            this.logOut();
          }
        } else {
          console.log(response.data.msg);
        }
      })
      .catch(function () {
        isSuccess = false;
        console.log("Something went wrong! Please refresh the page");
      });

    return isSuccess;
  },
  isleadsAllow: function () {
    let isleadsAllowed = false;
    const cookies = new Cookies();

    if (cookies.get("now_is_admin") === "on") {
      isleadsAllowed = true;
    } else if (cookies.get("Leads") === "yes") {
      isleadsAllowed = true;
    } else if (!cookies.get("now_is_admin") && !cookies.get("now_is_active")) {
      // console.log("first ddsdsddddddd");
      this.setPermission();
      if (cookies.get("Leads")) {
        isleadsAllowed = true;
      }
    }
    return isleadsAllowed;
  },
  getUserFullName: function () {
    let fullname = "Guest";
    const cookies = new Cookies();

    if (
      localStorage.getItem("first_name") != null &&
      localStorage.getItem("last_name") != null
    ) {
      fullname =
        localStorage.getItem("first_name") +
        " " +
        localStorage.getItem("last_name");
    } else if (cookies.get("first_name") && cookies.get("last_name")) {
      fullname = cookies.get("first_name") + " " + cookies.get("last_name");
    }
    return fullname;
  },
};

export default helpers;

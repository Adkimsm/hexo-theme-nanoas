/* 
-----------------------
------Sukka大佬的LS-----
-----------------------
*/
const setLS = (k, v) => {
    try {
        localStorage.setItem(k, v);
    } catch (e) {
        console.log(e.message);
    }
};

const removeLS = (k) => {
    try {
        localStorage.removeItem(k);
    } catch (e) {
        console.log(e.message);
    }
};

const getLS = (k) => {
    try {
        return localStorage.getItem(k);
    } catch (e) {
        console.log(e.message);
        return null;
    }
};

/* 
-----------------------
---作者写的辣鸡黑暗模式---
-----------------------
*/

function dark_mode() {
    //先定义一些常量
    const lightcss = document.getElementById("lightcss");
    const dark_mode_power = document.getElementById("darkpower");
    const dark_mode_ls = getLS("darkmode");
    const blogcss = document.getElementById("blogcss");

    if (dark_mode_ls) {
        lightcss.href = "/assets/css/style.css";
        blogcss.href = "/assets/css/blog_basic.css";
        dark_mode_power.className = "fa fa-moon-o";
        removeLS("darkmode");
    } else {
        lightcss.href = "/assets/css/dark_style.css";
        blogcss.href = "/assets/css/blog_basic_dark.css";
        dark_mode_power.className = "fa fa-sun-o";
        setLS("darkmode", "true");
    }
}

window.onload = () => {
    if (getLS("darkmode")) {
        const lightcss = document.getElementById("lightcss");
        const dark_mode_power = document.getElementById("darkpower");
        const blogcss = document.getElementById("blogcss");
        lightcss.href = "/assets/css/dark_style.css"; //伪异步JS
        blogcss.href = "/assets/css/blog_basic_dark.css";
        dark_mode_power.className = "fa fa-sun-o";
    }
}
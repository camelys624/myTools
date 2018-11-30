// 父页面获取子页面方法
window.document.getElementById('form_iframe_query').contentWindow.fn();

// 子页面获取父页面方法
window.parent.fn();

// 父页面获取子页面元素
window.frames["iframe_ID"].document.getElementById("元素id");

// 子页面获取父页面元素
window.parent.document.getElementById("元素id");
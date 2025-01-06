(function(d, t) {
    var BASE_URL = "https://app.chatwoot.com";
    var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
    g.src = BASE_URL + "/packs/js/sdk.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g, s);
    g.onload = function() {
      // 初始化 Chatwoot SDK
      window.chatwootSDK.run({
        websiteToken: 't7rPxeAxpbUGMZuPYFkTdfnt',
        baseUrl: BASE_URL
      });
  
      // 绑定按钮事件
      document.addEventListener('DOMContentLoaded', function() {
        var contactBtn = document.getElementById('contact-support');
        if (contactBtn) {
          contactBtn.addEventListener('click', function() {
            console.log('Button clicked');
            if (window.$chatwoot) {
              window.$chatwoot.toggle();
            } else {
              console.error('Chatwoot not initialized yet.');
            }
          });
        } else {
          console.error('Contact support button not found.');
        }
      });
    };
  })(document, "script");

  //复制链接
  document.addEventListener('DOMContentLoaded', function () {
    var copyBtn = document.getElementById('copy-docs-link'); // 获取按钮
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        // 定义需要复制的 URL
        var docsUrl = "https://docs.papawall.cc";
  
        // 创建一个临时的文本框用于复制
        var tempInput = document.createElement('input');
        tempInput.value = docsUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // 兼容移动端
  
        // 执行复制操作
        if (document.execCommand('copy')) {
          // 如果复制成功，弹出提示
          alert('复制成功！链接已复制到剪贴板。');
        } else {
          // 如果复制失败，提示用户
          alert('复制失败，请手动复制链接：' + docsUrl);
        }
  
        // 移除临时文本框
        document.body.removeChild(tempInput);
      });
    } else {
      console.error('复制按钮未找到，请检查 HTML 中的按钮 id 是否正确。');
    }
  });
  
// 测试环境
// var host="http://dev.iwhere.com:9008";
// 正式下载
// var host="${interfaces.url}"
// var host="http://localhost:8080";
// var host="http://10.3.11.44:8080"
var host="http://qa.iwhere.com:9010"
// var host="http://qa.iwhere.com:8110"

function ajaxGet(url,cache,success,error) {
    $.ajax({
        url:host + url,
        type:'GET',
        cache:cache,
        dataType:"json",
        timeout: 1000*60*60,
        success:success,
        error:error,
        complete: function(XMLHttpRequest, textStatus) {
            setTimeout(function() {
                if(textStatus != 'success') {
                    if(XMLHttpRequest.status == "404") {
                        console.log("请检查网络");
                        return;
                    }
                    if(textStatus == 'timeout') {
                        console.log("请求超时");
                        return;
                    }
                    if(textStatus == 'error') {
                        console.log("请求出错");
                        return;
                    } else {
                        console.log("请求异常"+textStatus);
                        return;
                    }
                }
            }, 500);

        }
    });
}

function ajaxPost(url,data,success,error) {
    $.ajax({
        url:host + url,
        type:'POST',
        data:data,
        dataType:"json",
        timeout: 1000*60*60,
        success:success,
        error:error,
        complete: function(XMLHttpRequest, textStatus) {
            setTimeout(function() {
                if(textStatus != 'success') {
                    if(XMLHttpRequest.status == "404") {
                        console.log("请检查网络");
                        return;
                    }
                    if(textStatus == 'timeout') {
                        console.log("请求超时");
                        return;
                    }
                    if(textStatus == 'error') {
                        console.log("请求出错");
                        return;
                    } else {
                        console.log("请求异常"+textStatus);
                        return;
                    }
                }
            }, 500);
        }
    });
}
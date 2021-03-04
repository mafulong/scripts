
let date = new Date()
var dateStr = dateFormat("YYYY-mm-dd-", date)

function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}



var href = window.location.href;


var curTitle = document.getElementsByClassName("css-10c1h40-Title")[0]
console.log(curTitle)
var titleHref = curTitle.getElementsByTagName("a"); 
console.log(titleHref)
var title = titleHref[0].innerHTML

console.log("title:", title)


var data =`---
layout: post
category: leetcode
title: `+title+`
tags: leetcode
---

## title
[problem link](`+href+`)
`+`\n\n`+`

## solution

\`\`\`python

\`\`\`
`

console.log(data)


var fileName = dateStr + title + ".md";
var path = "/Users/mafulong/mafulong.github.io/_posts/Algorithms/leetcode/"+fileName;
// console.log(path)


pathStr = "\""+path+"\""
var shell = "touch "+pathStr +";"
+ "echo \'"+data+"\' >"+pathStr+"     ; open -a typora  "+pathStr;

// ```; echo \'``` + ```fdfd``` + ```> ```+path + ```; cat ```+path;
console.log(shell)
window.copy(shell);

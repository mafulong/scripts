x = document.querySelector("#base_content > div.container > div > div > div:nth-child(3) > div > div.question-content.default-content")
if (x==null){
  x= document.querySelector("#question-detail-main-tabs > div.tab-pane__1SHj.css-12hreja-TabContent.e16udao5 > div > div.content__1Y2H > div")
}
// console.log(x)
a = []
for (let node of x.childNodes) {
//   console.log(node.nodeName); // 显示集合中的所有节点
  if (node.nodeName == "PRE"){
      t = node.childNodes[1].data
      t = t.replace(/\n/g, "")
      t = t.replace(/ /g, "")
      a.push(t)
      t = node.childNodes[3].data
      t = t.replace(/\n/g, "")
      t = t.replace(/ /g, "")
      a.push(t)
//       console.log(node)
//       for (let pre of node.childNodes){
//           console.log(pre, pre.nodeName)
// //           if (pre.nodeName == "#text"){
// //                console.log('text:', pre)
// //                t = pre.data
// //                t = t.replace(/\n/g, "")
// //                t = t.replace(/ /g, "")
// //                a.push(t)
// //           }
//       }
  }
}
console.log(a)
n = a.length
console.log(n)
res = ""
i = 0
while (2*i<n){
//     console.log(a[3*i], a[3*i+1], a[3*i+2])
    in1 = a[2*i]
    out1 = a[2*i+1]
    t = "print(\"actual:\", f(" + in1 + "),\"should:\", "+out1+")"
    res = res+"\n"+ t
//     console.log(t)
    i+=1
}
console.log(res)
window.copy(res)

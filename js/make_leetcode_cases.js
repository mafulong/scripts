x = document.querySelector("#base_content > div.container > div > div > div:nth-child(3) > div > div.question-content.default-content")
console.log(x)
a = []
b= []
for (let node of x.childNodes) {
  console.log(node.nodeName); // 显示集合中的所有节点
  if (node.nodeName == "PRE"){
//       console.log(node)
      for (let pre of node.childNodes){
//           console.log(pre, pre.nodeName)
          if (pre.nodeName == "#text"){
               console.log('text:', pre)
               t = pre.data
               t = t.replace(/\n/g, "")
               t = t.replace(/ /g, "")
               a.push(t)
          }
      }
  }
}
console.log(a)
n = a.length
console.log(n)
res = ""
i = 0
while (3*i<n){
//     console.log(a[3*i], a[3*i+1], a[3*i+2])
    in1 = a[3*i]
    out1 = a[3*i+1]
    t = "print(\"actual: \", f(" + in1 + "),\"should: \", "+out1+")"
    res = res+"\n"+ t
//     console.log(t)
    i+=1
}
console.log(res)
window.copy(res)

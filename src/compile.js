const generator = require("@babel/generator")
const parser = require("@babel/parser")
const traverse = require("@babel/traverse")
const t = require("@babel/types")
function compile(code) {
    //   1. 解析
    const ast = parser.parse(code)
    //   2. 遍历
   		 //visitor可以对特定节点进行处理
    const visitor = {
      //定义需要转换的节点CallExpression
        CallExpression(path) {
          	//获取当前的节点
            const { callee } = path.node;
          	//判断,babel/types类型判断
            if (t.isMemberExpression(callee) && callee.object.name === 'console'&& callee.property.name === 'log' ) {
              	// 获取上层FunctionDeclaration路径
                const funcPath = path.findParent(p => {
                    return p.isFunctionDeclaration();
                })
               	// 将上层函数名添加到参数前
                path.node.arguments.unshift(
                    t.stringLiteral(`function name ${funcPath.node.id.name}:`)
                )
            }
        }
    }
    traverse.default(ast, visitor)
    //   3. 生成代码片段
    return generator.default(ast, {}, code)
}
const code = `
    function foo(){
        console.log('bar')
    }
`
const result = compile(code)
console.log(result.code) // output:  function foo() {console.log("function name foo:", 'bar');}
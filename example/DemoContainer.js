/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import React, {Component} from "react";
import MDEditor from '../src/index';

export default class DemoContainer extends Component{
    componentDidMount(){}

    render(){
        return (
            <MDEditor
                defaultValue={`
# markdown 简易说明

这就是 ~~删除线~~

这就是 **加粗** ，另一种写法  __粗体文本__

这就是 *斜体*  ，另一种写法  _斜体文本_

这就是 ***粗斜体文本*** ，另一种写法 ___粗斜体文本___

### emoji 支持

[更多表情点击这里](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

 :) :baby_chick: :broken_heart: :cow2:

### 分割线
------

### 列表支持

- 列表文本前使用 [减号+空格]
+ 列表文本前使用 [加号+空格]
* 列表文本前使用 [星号+空格]

1. 列表前使用 [数字+空格]
2. 我们会自动帮你添加数字
7. 不用担心数字不对，显示的时候我们会自动把这行的 7 纠正为 3


1. 列出所有元素：
    - 无序列表元素 A
        1. 元素 A 的有序子列表
    - 前面加四个空格
2. 列表里的多段换行：
    前面必须加四个空格，
    这样换行，整体的格式不会乱
3. 列表里引用：

    > 前面空一行
    > 仍然需要在 >  前面加四个空格


### 引用

> 引用文本前使用 [大于号+空格]
> 折行可以不加，新起一行都要加上哦

### 图片
![e8c550d17c93bb52b360dd5395523f45.jpg](https://s3.meituan.net/v1/mss_814dc1610cda4b2e8febd6ea2c809db5/apps-open/f2dd4c23-a674-4106-a196-60632fc9b542_1495610790360?filename=e8c550d17c93bb52b360dd5395523f45.jpg)


| 一个普通标题 | 一个普通标题 | 一个普通标题 |
| ------| ------ | ------ |
| 短文本 | 中等文本 | 稍微长一点的文本 |
| 稍微长一点的文本 | 短文本 | 中等文本 |
|fdsafds|fdsafdsa|范德萨范德萨发是|

### 1. 制作一份待办事宜

- [ ] 支持以 PDF 格式导出文稿
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能
`}
                doc = {{name:'test.doc',status:'fjdisoaifasdof'
                }}
                ref={(e)=>{this.MDEditor = e;}}
                coCursors = {[{name:'yeanzhi',range:{length:1,index:50},id:'123'}]}
                options={{
                    uploadUrl:'http://mind.xm.test.sankuai.com/api/upload',
                    helpOptions:[
                        {key:'nihao',content:'nihaoa',onClick:(key)=>{console.log(key);}}
                    ]
                }}/>
        )
    }
}

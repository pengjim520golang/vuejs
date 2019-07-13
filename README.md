# Vue安装

以Vue2.3以上的版本为主，采用2.6(原因是解决了一些天坑),安装代码如下:

```html
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
```

假设我们需要安装vue-router也可以通过以下方式安装:

```html
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
<script src="https://cdn.bootcss.com/vue-router/3.0.7/vue-router.js"></script>
```

## vue实例化

语法规则: new Vue(options对象)

* options对象:

el: 表示要控制的范围,通常是一个dom对象的id

data: 普通的数据层

computed : 计算属性(getter/setter),同步方式

methods : 定义事件

watch : 监听,异步方式

components : 组件

router : 路由

.... 


## 第1个vue代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- 属于vue的部分 -->
    <div id="root">{{x}}+{{y}}={{x+y}}</div>
</body>

<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>

<script>
    //这部分数据javascript本身部分
    window.onload = function(){
        const vm = new Vue({
            el: "#root", //要渲染范围
            //要渲染数据有哪些
            data : {
                x:100,
                y:200
            }
        })
    }
</script>

</html>
```

> 注意事项: vue不能渲染到`<html>`和`<body>`标签中,vue不适合用于做搜索引擎优化的web开发

# vue指令

### {{}}和v-html

{{}} 模板渲染的指令标签,用于把数据进行原样输出,v-html是非原样输出通常可以把html标签解析了

> {{}} 可以绑定在标签内容当中,v-html指令接受的是一个字符串只能绑定在标签当中

```html
<div>{{内容}}</div>
<div v-html="message"></div>
```


### v-bind指令

v-bind指令又称为单向绑定指令,其简写方式`:属性名称`

```html
        <div :title="x+y">
            鼠标放上去显示x+y的结果=300
        </div>

        <div v-bind:title="x+y">
            鼠标放上去显示x+y的结果=300
        </div>    
```


### v-model指令

v-model指令是双向绑定的,也就是data改变影响view的改变,反之一样.

> v-model一般就是用于绑定表单的value的,如果绑定不可以修改的普通属性就采用单向绑定,v-model不可以简写

```html
    <input type="text" v-model="x" />
```

### v-on事件指令

v-on用于绑定事件,简写为@,同时如果要触发一个事件,我们必须在初始化vue的时候设置选项为methods,如以下代码所示:

```html

    <!-- 属于vue的部分 -->
    <div id="root">
        <button v-on:click="fn">button</button>
        <button v-on:click="sum(x,y)">sum</button>
        <button @click="sum(x,y)">result</button>
    </div>

<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>

<script>
    //这部分数据javascript本身部分
    window.onload = function(){
        const vm = new Vue({
            el: "#root", //要渲染范围
            //要渲染数据有哪些
            data : {
                x:100,
                y:200
            },
            methods:{
                fn(){
                    alert(this.x) 
                },
                sum(x,y){
                    alert("result:" + (x+y) ) 
                }
            }
        })
    }
</script>
```


# computed的计算属性

该选项属于初始化选项,实际上就getter/setter,定义如下

```javascript
    //这部分数据javascript本身部分
    window.onload = function(){
        const vm = new Vue({
            el: "#root", //要渲染范围
            //要渲染数据有哪些
            data : {
                x:100,
                y:200
            },
            computed:{
                num_x:{
                    get(){
                        return this.x 
                    },
                    set(newValue){
                        //console.log(typeof newValue)
                        this.x = parseInt(newValue)
                    }
                },
                num_y:{
                    get(){
                        return this.y 
                    },
                    set(newValue){
                        this.y = parseInt(newValue)
                    }
                }
            }
        })
    }
```

> computed的定义不能在data选项中定义_的数据,因为_在vue被看成了函数,computed中定义函数名称不能和data中的名称一致否则会报错.

# v-if和v-show 

这两个指令可以配合vue的动画一起使用的.

v-if:是删除了html元素

v-show:隐藏了html元素

```html
            <button @click="eventFade">显示/隐藏</button>
             <div class="box" v-if="boolShow"></div>
            <div class="box" v-show="boolShow"></div>
```

# v-for列表渲染指令

用于做列表渲染,简单来说就是循环!v-for的内部是封装一个迭代器的协议,如果只是获取值他调用是for..of如果获取是key=>value它调用是for..in.如果是一个数字,则调用for循环 v-for当中如果需要调优还建议绑定`:key`选项

```html
<body>
    <!-- 属于vue的部分 -->
    <div id="root">
        <ul>
            <li v-for="rs in sets">{{rs.name}},{{rs.age}}</li>
        </ul>

        <ul>
            <li v-for="rs,index in sets">{{index}}:{{rs.name}},{{rs.age}}</li>
        </ul>

        <!-- 调优就必须绑定:key -->
        <ul>
                <li v-for="rs,index in sets" :key="rs.id">{{rs.id}}:{{rs.name}},{{rs.age}}</li>
        </ul>
    </div>
</body>
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
<script>
    //这部分数据javascript本身部分
    window.onload = function(){
        const vm = new Vue({
            el: "#root", //要渲染范围
            //要渲染数据有哪些
            data : {
               sets:[
                   {id:100,name:"pengjin",age:33},
                   {id:220,name:"zs",age:31},
                   {id:333,name:"ls",age:32},
               ]
            }
        })
    }
</script>
</html>
```


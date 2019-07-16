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


# vue-router 路由

## 路由的定义

### 步骤1：实例化路由

```html
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
<script src="https://cdn.bootcss.com/vue-router/3.0.7/vue-router.js"></script>
<script>
    const vmRouter = new VueRouter({
        routes:[
            {path:"路由的地址",component:{template:"模板的字符串"}}
        ]
    })

    const vm = new Vue({
        .... 
        router:vmRouter
    })
</script>
```

### 步骤2：需要在渲染控制范围中加入router-view标签

```html

<div>
    <router-view></router-view>
</div>

<script>
    const vmRouter = new VueRouter({
        routes:[
            {path:"路由的地址",component:{template:"模板的字符串"}}
        ]
    })

    const vm = new Vue({
        el:"#root" 
        router:vmRouter
    })
</script>
```

> 注意事项:假设需要在初始化vue实例的时候，访问路由实例需要通过`this.$router`去访问

```html
<script>
    const vmRouter = new VueRouter({
        routes:[
            {path:"路由的地址",component:{template:"模板的字符串"}}
        ]
    })

    const vm = new Vue({
        el:"#root" 
        router:vmRouter,
        methods:{
            fn(){
                this.$router.push("/user/12345")
            }
        }
    })
</script>
```

> 注意事项:go表示前进或者后退, -1表示后退1次,-2后退两次..依次类推,正数表示前进,推算方式与后退一致


### 步骤4：跳转路由<router-link></router-link>标签

标签中有以下属性要注意:

to : 表示跳转路由地址

class: 表示自定义的css样式

.router-link-active如果被重写，则可以定义<router-link>激活样式


### 步骤5：嵌套路由

使用`children`选项定义路由,其跟`component`选项处于同一级别

```javascript
        const vmRouter = new VueRouter({
            routes:[
                {
                    path:"/user/:id",
                    component:{
                        template:
                        `
                        <div>
                            当前用户的id={{$route.params.id}}
                            <br />
                            <router-view></router-view>
                        </div>
                        `, //err
                    },
                    children:[
                            {
                                path:"details", //err
                                component:{template:"<div>某某用户，来自xxx地方,xxxx学历</div>"} //err
                            },
                            {
                                path:"message", //err
                                component:{template:"<div>您有1条新的消息请注意查收</div>"} //err
                            }
                    ]
                }
            ]
        })
```

# vue的过滤器

## 使用过滤器的方式

在vue里面使用过滤器一般通过`{{}}`插入表达式并使用`|`管道来使用,管道的数量表示使用过滤器的数量

```javascript
{{数据变量 | 过滤器名称1... }}
```

> 在一般的情况下,vue2.3以上版本会把数据变量作为第一个参数传递过滤器,这就意味着过滤器至少含有一个参数

## 定义Vue的全局过滤器

```javascript
Vue.filter("open",function(defaultArg,...args){

})
```

> 多参数使用的方式{{content | open(参数2,参数3)}},参数1就是content

## 定义Vue的私有过滤器

私有过滤是定义在vue实例内部,通过`filters`来实现

```javascript
new Vue({
    el:"#root",
    filters:{
        open:function(defaultArgs,...args){
            ....
        }
    }
})
```

# vue的自定义指令

自定义指令也是使用`v-`作为前缀,定义的时候不需要加`v-`,都是用`directive`的方式进行定义

## 全局的定义方式

```javascript
Vue.directive("focus",{
    bind:function(el,binding){

    },
    inserted:function(el,binding){

    },
    update:function(el,binding){

    }
})
```

bind: 指定的是设置,一般是指代当前的el可以在虚拟DOM中完成

update: 指定的是设置,一般是指代当前的el可以在虚拟DOM中完成

inserted:指定的是行为,一般指代当前的el必须在DOM树中完成

## 私有的定义方式

```javascript
new Vue({
    el:"#root",
    directives:{
       focus:{
            bind:function(el,binding){

            },
            inserted:function(el,binding){

            },
            update:function(el,binding){

            }           
       }
    }
})
```


## 简写的定义方式

一般指考虑`bind`和`update`可以简写

```javascript
new Vue({
    el:"#root",
    directives:{
       focus:function(el,binding){

       }
    }
})
```


> binding这个参数有3个重要的属性: name表示指令的名称,value表示绑定的值,expression表示绑定的原始表达式


### 面试题

```javascript
new Vue({
    el:"#root",
    data:{
        message:"hello"
    },
    directives:{
       demo:(el,binding)=>{
           //console.log(this.message)  //会发生错误码,this指向是directives对象
           console.log(binding.value.message)
       }
    }
})
```
如果必须要访问data中的message，必须通过binding去完成,代码如下:

```html
<div v-demo="{message}" :title="message">content</div>
```


# Vue3.0

### Vue3 环境搭建

- 使用`npm install @vue/cli`安装全家桶，接着`vue create demo`创建一个`vue3`的项目。
- `npm init vite-app demo`使用`vite`初始化一个`vue3`项目，接着`npm i`安装依赖。

### Vue3 安装开发工具

- 使用`git`克隆`vuejs/devtools`项目
- `yarn install`如果没有`yarn`就用`npm`安装
- `yarn run build`
- 在谷歌浏览器中点击左上角的三个小点，找到`更多工具`，点击`扩展程序`
- 点击`加载已解压的扩展程序`，选择刚刚克隆的项目里`packages/shell-chrome`
- `npm run serve`，打开F12，在上面的菜单栏中找到`vue`, 完成

### Vue3 性能上的提升

- mount 提升`50%`
- 内存占用小提升`120%`
- 核心代码 + CompositionAPI : `13.5kb`, 最小`11.75kb`
- 所有 RunTime : `22.5kb` (vue2 是`32kb`)

### Vue3 中的新特性

- `TS`重写`Diff`算法，使用`Proxy`性能更优，框架体积更小
- 新的`Compiler`，通过注释标记提升框架性能
- `CompositionAPI`，模块化功能代码，`摒弃this`，取而代之的是`setup`方法
- 更好的按需加载 (得益于`Tree Shaking`)
- 新增：`Fragment`、`Teleport`、`Suspense`
- `Vite`开发工具

### Vue3 中的变化

- 摒弃了`App`这个概念
- v-model
    - v-bind .sync 被删除
    - 支持多个v-model绑定同一组件
    - 自定义v-model
- v-if优先级大于v-for，但如果两个写在同一元素上会报错
- v-bind="object"，排在后面的覆盖前面的属性
- Transition 命名变化

### Vue3 响应式原理

- `Proxy`替代了`Object.defineProperty()`实现数据响应
    - `Proxy`兼容特别是`IE`的兼容做的不是特别好
    - `Proxy`使用的是`ES6`的语法
    - [`demo` :arrow_right:](https://github.com/liao123-git/Vue3.0/tree/main/demo1 "响应式原理demo")
- `Diff`算法优化，重写`Virtual DOM`
    - `Compiler`原理篇
        - [`Vue3 Template Explorer` :arrow_right:](https://vue-next-template-explorer.netlify.app/ "Vue3 Template Explorer")
        - 静态`Node`不再做更新处理
        - 静态绑定的`class`，`id`不再做更新处理
        - 结合打包标记`PatchFlag`，进行更新分析 (动态绑定)
        - 事件监听器`Cache`缓存处理 (`cacheHandlers`)
        - `hoistStatic`自动针对多静态节点进行优化，输出成字符串
    - Vue3 Diff
        - Vue3 Diff 算法核心就是子节点之间的对比，主要分为两种情况
            - 子节点无key
                - 尽可能复用老节点
                - 比较新老`children`的`length`获取最小值
                - 对于公共的部分，进行从新`patch`工作
                - 如果长于旧的，则新增；如果短于旧的，则删除
            - 子节点有key
                - [`最长递增子序列` :arrow_right:](https://leetcode-cn.com/problems/longest-increasing-subsequence/ "最长递增子序列")
        - 新Diff算法
            - patchChildren根据是否存在key进行真正的diff
            - 复用真实的dom节点，避免不必要的性能开销
            - 乱序时，先找到最长递增子序列作为参考，然后再移动

### Composition API

- 逻辑代码更少，更集中，更易扩展
- 更加丰富的API集成
- 对于TS来说，非常友好 (利于类型推导)

#### Vue2 逻辑复用方式

- `Minxin` (命名空间冲突、逻辑不清晰、不易复用)
- `scoped slot`作用域插槽 (配置项多、代码分裂、性能差)
- `vue2`对`TS`支持不充分

### 新增组件属性setup及其用法

- [`官方文档` :arrow_right:](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#%E4%BB%80%E4%B9%88%E6%98%AF%E7%BB%84%E5%90%88%E5%BC%8F-api "官方文档")
- [`样例` :arrow_right:](https://github.com/liao123-git/Vue3.0/tree/main/vue3-demo/src/views/Home.vue "样例")
- `setup`中没有`this`指向，无法访问组件声明中的属性
- `setup`接受两个参数`props`与`context`
- 第一个参数`props`不能使用`ES6`解构
    - [`官方说明` :arrow_right:](https://v3.cn.vuejs.org/guide/composition-api-setup.html#props "官方说明")
- `Vue3`中也可以使用`Vue2`的百分之九十以上的语法

### Vue3中如何进行逻辑复用

- [`样例` :arrow_right:](https://github.com/liao123-git/Vue3.0/tree/main/vue3-demo/src/views/LogicReuse.vue "样例")
- 使用组合式API可以很方便的抽离逻辑代码进行复用

### 组合式API `watch`和`watchEffect`

- 都可以监听响应式对象的变化，从而执行回调
- `watchEffect`会默认执行一次，而`watch`不会，必须事件触发
- `watchEffect`只接收函数作为回调参数，而`watch`
  可以监听多个响应式对象，[`样例` :arrow_right:](https://github.com/liao123-git/Vue3.0/blob/main/vue3-demo/src/views/LogicReuse.ts#L23 "样例")

#### watch

- [`官方文档` :arrow_right:](https://v3.cn.vuejs.org/guide/composition-api-introduction.html#watch-%E5%93%8D%E5%BA%94%E5%BC%8F%E6%9B%B4%E6%94%B9 "官方文档")
- [`样例` :arrow_right:](https://github.com/liao123-git/Vue3.0/blob/main/vue3-demo/src/views/LogicReuse.ts#L18 "样例")

#### watchEffect

- [`官方文档` :arrow_right:](https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#watcheffect "官方文档")
- [`样例` :arrow_right:](https://github.com/liao123-git/Vue3.0/blob/main/vue3-demo/src/views/LogicReuse.ts#L28 "样例")
- 回调函数内的响应式对象被修改时，自动调用回调函数

#### computed

- [`官方文档` :arrow_right:](https://v3.cn.vuejs.org/api/computed-watch-api.html#computed "官方文档")
- [`样例` :arrow_right:](https://github.com/liao123-git/Vue3.0/blob/main/vue3-demo/src/views/LogicReuse.ts#L39 "样例")

### 常见响应式API

- [`官方文档` :arrow_right:](https://v3.cn.vuejs.org/api/reactivity-api.html "官方文档")

#### OptionsAPI和CompositionAPI的区别

- `OptionsAPI`就是直接在组件上传递的属性，是`vue2`的语法，比如说`watch`、`computed`...
- `CompositionAPI`就是在文件内`import`出来的，是`vue3`的语法

#### reactive

- 深转换响应式副本
- [`样例` :arrow_right:](https://github.com/liao123-git/Vue3.0/blob/main/vue3-demo/src/views/ReactivityTest/ReactiveTest.ts "样例")

#### readonly

- 创建一个只读对象
- [`样例` :arrow_right:](https://github.com/liao123-git/Vue3.0/blob/main/vue3-demo/src/views/ReactivityTest/ReaonlyTest.ts "样例")

#### ref和reactive的区别

- `ref`和`reactive`一个针对原始数据类型，而另一个用于对象，这两个API都是为了给JavaScript普通的数据类型赋予响应式特性(reactivity)
  。根据Vue3官方文档，这两者的主要区别在于每个人写JavaScript时的风格不同，有人喜欢用原始数据类型(primitives)，把变量单独拎出来写；而有人喜欢用对象(Object)，把变量当作对象里的属性，都写在一个对象里头

#### 解构reactive使其丢失响应式特性

```ts
const utils = () => {
    // 这里虽然使用了reactive函数，但是无法使x, y在解构之后具有响应特性
    const state = reactive({
        x: 1,
        y: 2
    })
    return state
}

export default defineComponent({
    setup() {
        const {x, y} = utils()

        setTimeout(() => {
            x = 99
            y = 33
        }, 2000)

        return {
            x, y
        }
    }
})
```

- 为了解决上述问题，Vue3又提供了一个新的API：`toRefs`，它可以将一个响应型对象(reactive object) 转化为普通对象(plain object)，同时又把该对象中的每一个属性转化成对应的响应式属性(ref)
  。说白了就是放弃该对象(Object)本身的响应式特性(reactivity)，转而给对象里的属性赋予响应式特性(reactivity)

```ts
const utils = () => {
    const state = reactive({
        x: 1,
        y: 2
    })
    // 转换成ref
    return toRefs(state)
}

export default defineComponent({
    setup() {
        const {x, y} = utils()

        setTimeout(() => {
            x = 99
            y = 33
        }, 2000)

        return {
            x, y
        }
    }
})
```

### 踩坑

- `TS`对于代码格式有很严格的要求
    - 结尾不能有分号
    - 字符串只能用单引号
    - 不过都是可以写个配置文件改的
- `vue`版本和`vue-template-compiler`版本不同问题
    - 可以按照报错提示来安装相对应的版本
    - [`详细步骤` :arrow_right:](https://ldl1204.xyz/67.html "详细步骤")
- 如果出现一些诡异的报错就删掉`node_modules`和`package-lock.json`，再`npm i`试试
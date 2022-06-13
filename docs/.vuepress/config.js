module.exports = {
    title: 'Vue3Notes',
    dest: './dist',
    base: '/Vue3Notes/',
    repo:
        'https://github.com/changhengheng/Vue3Notes.git',
    themeConfig: {
        lastUpdated: '上次更新',
        smoothScroll: true,
        nav: [
            {
                text: 'Vue3Notes',
                link: 'https://github.com/changhengheng/Vue3Notes.git',
            },
        ],
        sidebar: [
            {
                title: '0.起步',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/0.起步/1.认识vue3', '认识vue3'],
                    ['/0.起步/3.项目目录分析', '项目目录分析'],
                    ['/0.起步/4.Vue3的devtools', 'Vue3的devtools'],
                ]
            },
            {
                title: '1.基础类型',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/1.组合API/1.setup测试', 'setup测试'],
                    ['/1.组合API/2.setup和ref的基本使用', 'setup和ref的基本使用'],
                    ['/1.组合API/3.reactive的基本使用', 'reactive的基本使用'],
                    ['/1.组合API/4.目标对象和代理对象对比', '目标对象和代理对象对比'],
                    ['/1.组合API/5.vue2和vue3响应式的对比', 'vue2和vue3响应式的对比'],
                    ['/1.组合API/6.setup深入', 'setup深入'],
                    ['/1.组合API/7.reactive和ref细节', 'reactive和ref细节'],
                    ['/1.组合API/8.computed和watch', 'computed和watch'],
                    ['/1.组合API/9.vue2和vue3生命周期对比', 'vue2和vue3生命周期对比'],
                    ['/1.组合API/10.自定义hook函数', '自定义hook函数'],
                    ['/1.组合API/11.封装发送ajax请求的hook函数', '封装发送ajax请求的hook函数'],
                    ['/1.组合API/12.toRefs', 'toRefs'],
                    ['/1.组合API/13.ref获取元素', 'ref获取元素'],
                    ['/1.组合API/14.shallowReactive和shallowRef', 'shallowReactive和shallowRef'],
                    ['/1.组合API/15.readonly和shallowReadonly', 'readonly和shallowReadonly'],
                    ['/1.组合API/16.toRaw和markRaw', 'toRaw和markRaw'],
                    ['/1.组合API/17.toRef', 'toRef'],
                    ['/1.组合API/18.customRef', 'customRef'],
                    ['/1.组合API/19.provide和inject', 'provide和inject'],
                    ['/1.组合API/20.判断响应式数据是怎样创建的', '判断响应式数据是怎样创建的'],
                ]
            },
            {
                title: '2.新组件',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/2.新组件/1.Fragment', 'Fragment'],
                    ['/2.新组件/2.Teleport', 'Teleport'],
                    ['/2.新组件/3.Suspense', 'Suspense'],
                ]
            },
            {
                title: '3.案例',
                collapsable: false,
                sidebarDepth: 2,
            },
            {
                title: '4.补充',
                collapsable: false,
                sidebarDepth: 2,
            },
        ]
    }
}
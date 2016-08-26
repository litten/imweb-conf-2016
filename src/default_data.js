export default {
    // 上午
    am: [{
        author: '罗成',
        info: '腾讯高级工程师',
        vip: true,
        title: '《HTTPS最佳实践》',
        time: '10:30',
        des: 'HTTPS很安全但却要消耗非常多的CPU资源STGW针对nginx和openssl进行了大量优化，用以提升HTTPS的计算性能和访问速度。此次着重为大家介绍一下HTTPS的计算原理和计算性能优化。',
		img:'罗成.jpg',
        isChecked: 'checked'
    }, {
        author: '汤进伟',
        info: '腾讯工程师',
        title: '《RN在企鹅辅导中的应用》',
        time: '11:15',
        des: 'ReactNative给了前端更多的能力，但是RN 用在生产环境中，开发体验如何？性能如何？能替代原生app吗？',
        img: '汤进伟.jpg'
    }],
    // 下午-node
    pmNode: [{
        author: '陈映平',
        info: '云汉金融科技前端技术负责人',
        title: '《express内核解析与服务端开发实践》',
        time: '14:00',
        vip: true,
        des: '由浅入深，剖析express的核心架构与设计。同时，对node服务端开发实践相关的技术链条进行概要的介绍',
        img: '陈映平.jpg',
        isChecked: 'checked',
    }, {
        author: '黎清龙',
        info: 'IMWeb团队成员',
        title: '《真的需要后端吗？》',
        time: '14:50',
        des: '围绕一个 nobackend 系统，该系统主要是基于制定 schema 来创建 cgi 接口的理念设计实现，解决在大量业务需求下 cgi 和后台人力不足的问题，并同时提升前端开发的效率。',
        img: '黎清龙.jpg'
    },{
        author: '朱林',
        info: 'IMWeb团队成员',
        title: '《Node在直播中的应用》',
        time: '15:30',
        des: '通过对NOW直播中基于NodeJS实现的安全打击平台的剖析，讲解如何构建NodeJS应用，如何在直播场景下的分布式异构系统中与其他服务进行通信。',
        img: '朱林.jpg'
    }],
    // 下午-react
    pmReact: [{
            author: '梁伟盛',
            info: '腾讯高级工程师',
            title: '《React+Redux组件化那些事》',
            time: '14:00',
            des: '页面功能越来越多？交互越来越复杂？让react + redux组件化帮你解决这些痛点',
            img: '梁伟盛.jpg',
            isChecked: 'checked'
    }, {
            author: '杨春文',
            info: 'IMWeb团队成员',
            title: '《React同构》',
            time: '14:50',
            des: '本次分享我们团队在使用react+redux过程中遇到的一些性能瓶颈，和在解决前后端代码/API复用、提升工作效率及前后台架构调整中所做的一些尝试及成果',
            img: '杨春文.jpg'
    }],
    // 下午-混合
    pmComplex: [{
            author: '蒋豪群',
            info: '阿里高级工程师',
            title: '《JavaScript 的设计失误》',
            vip: true,
            time: '14:00',
            des: '作为「在十天内被创造出来」的语言，JavaScript的各种设计问题一直以来都广为开发者所诟病。本分享收集了JavaScript演进过程中留下来的各种设计失误，并试图探寻这些失误背后的历史和设计意图',
            img: '蒋豪群.jpg',
            isChecked: 'checked'
    }, {
            author: '黄龙',
            info: 'IMWeb团队成员',
            title: '《在线教育中的音视频优化》',
            time: '14:50',
            des: '教育的整体方案，首帧时长优化，流畅度优化，音视频多路的处理和音频上行方案',
            img: '黄龙.jpg'
    }, {
            author: '吴颖',
            info: 'IMWeb团队成员',
            title: '《前端工程化集成解决方案》',
            time: '15:30',
            des: '开发工作中的各种重复繁琐的任务，如何通过构建轻松解决？对层出不穷的构建工具，不知道如何选择？',
            img: '吴颖.jpg'
    }]
}
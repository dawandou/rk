import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '软考字典',
  base: '/rk/',
  bundler: viteBundler(),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
      maxSuggestions: 10,
      searchHeadings: true,
    }),
  ],
  theme: defaultTheme({
    logo: 'logo.png',
    outline: {
      level: [2, 3],
      label: '目录',
    },
    navbar: [
      { text: '首页', link: '/' },
      { text: '知识体系', link: '/第01章 信息化发展/' },
      { text: '高频考点', link: '/highlights/' },
      { text: '真题解析', link: '/exams/' },
    ],
    sidebar: {
      '/': [
        {
          text: '第01章 信息化发展',
          collapsible: true,
          children: [
            { text: '1.1 信息化概念', link: '/第01章 信息化发展/1.1 信息化概念' },
            { text: '1.2 现代化基础设施', link: '/第01章 信息化发展/1.2 现代化基础设施' },
            { text: '1.3 现代化创新发展', link: '/第01章 信息化发展/1.3 现代化创新发展' },
            { text: '1.4 数字中国', link: '/第01章 信息化发展/1.4 数字中国' },
            { text: '1.5 数字化转型与元宇宙', link: '/第01章 信息化发展/1.5 数字化转型与元宇宙' },
          ],
        },
        {
          text: '第02章 信息技术发展',
          collapsible: true,
          children: [
            { text: '2.1 信息技术概述', link: '/第02章 信息技术发展/2.1 信息技术概述' },
            { text: '2.2 新技术发展', link: '/第02章 信息技术发展/2.2 新技术发展' },
            { text: '2.3 信息化标准', link: '/第02章 信息技术发展/2.3 信息化标准' },
          ],
        },
        {
          text: '第03章 信息系统治理',
          collapsible: true,
          children: [
            { text: '3.1 治理概念', link: '/第03章 信息系统治理/3.1 治理概念' },
            { text: '3.2 IT治理', link: '/第03章 信息系统治理/3.2 IT治理' },
            { text: '3.3 数据治理', link: '/第03章 信息系统治理/3.3 数据治理' },
          ],
        },
        {
          text: '第04章 信息系统管理',
          collapsible: true,
          children: [
            { text: '4.1 系统管理概述', link: '/第04章 信息系统管理/4.1 系统管理概述' },
            { text: '4.2 IT服务管理', link: '/第04章 信息系统管理/4.2 IT服务管理' },
            { text: '4.3 信息安全管理', link: '/第04章 信息系统管理/4.3 信息安全管理' },
          ],
        },
        {
          text: '第05章 信息系统工程',
          collapsible: true,
          children: [
            { text: '5.1 工程概述', link: '/第05章 信息系统工程/5.1 工程概述' },
            { text: '5.2 软件工程', link: '/第05章 信息系统工程/5.2 软件工程' },
            { text: '5.3 系统集成', link: '/第05章 信息系统工程/5.3 系统集成' },
          ],
        },
        {
          text: '第06章 项目管理概论',
          collapsible: true,
          children: [
            { text: '6.1 项目概念', link: '/第06章 项目管理概论/6.1 项目概念' },
            { text: '6.2 PMBOK知识体系', link: '/第06章 项目管理概论/6.2 PMBOK知识体系' },
            { text: '6.3 项目经理职责', link: '/第06章 项目管理概论/6.3 项目经理职责' },
          ],
        },
        {
          text: '第07章 项目立项管理',
          collapsible: true,
          children: [
            { text: '7.1 立项流程', link: '/第07章 项目立项管理/7.1 立项流程' },
            { text: '7.2 可行性研究', link: '/第07章 项目立项管理/7.2 可行性研究' },
            { text: '7.3 招投标管理', link: '/第07章 项目立项管理/7.3 招投标管理' },
          ],
        },
        {
          text: '第08章 项目整合管理',
          collapsible: true,
          children: [
            { text: '8.1 项目章程', link: '/第08章 项目整合管理/8.1 项目章程' },
            { text: '8.2 项目管理计划', link: '/第08章 项目整合管理/8.2 项目管理计划' },
            { text: '8.3 整体变更控制', link: '/第08章 项目整合管理/8.3 整体变更控制' },
          ],
        },
        {
          text: '第09章 项目范围管理',
          collapsible: true,
          children: [
            { text: '9.1 范围规划', link: '/第09章 项目范围管理/9.1 范围规划' },
            { text: '9.2 WBS分解', link: '/第09章 项目范围管理/9.2 WBS分解' },
            { text: '9.3 范围控制', link: '/第09章 项目范围管理/9.3 范围控制' },
          ],
        },
        {
          text: '第10章 项目进度管理',
          collapsible: true,
          children: [
            { text: '10.1 进度计划', link: '/第10章 项目进度管理/10.1 进度计划' },
            { text: '10.2 关键路径法', link: '/第10章 项目进度管理/10.2 关键路径法' },
            { text: '10.3 进度压缩', link: '/第10章 项目进度管理/10.3 进度压缩' },
          ],
        },
        {
          text: '第11章 项目成本管理',
          collapsible: true,
          children: [
            { text: '11.1 成本估算', link: '/第11章 项目成本管理/11.1 成本估算' },
            { text: '11.2 成本预算', link: '/第11章 项目成本管理/11.2 成本预算' },
            { text: '11.3 成本控制', link: '/第11章 项目成本管理/11.3 成本控制' },
          ],
        },
        {
          text: '第12章 项目质量管理',
          collapsible: true,
          children: [
            { text: '12.1 质量规划', link: '/第12章 项目质量管理/12.1 质量规划' },
            { text: '12.2 质量保证', link: '/第12章 项目质量管理/12.2 质量保证' },
            { text: '12.3 质量控制', link: '/第12章 项目质量管理/12.3 质量控制' },
          ],
        },
        {
          text: '第13章 项目资源管理',
          collapsible: true,
          children: [
            { text: '13.1 资源规划', link: '/第13章 项目资源管理/13.1 资源规划' },
            { text: '13.2 团队管理', link: '/第13章 项目资源管理/13.2 团队管理' },
            { text: '13.3 资源控制', link: '/第13章 项目资源管理/13.3 资源控制' },
          ],
        },
        {
          text: '第14章 项目沟通管理',
          collapsible: true,
          children: [
            { text: '14.1 沟通规划', link: '/第14章 项目沟通管理/14.1 沟通规划' },
            { text: '14.2 沟通渠道', link: '/第14章 项目沟通管理/14.2 沟通渠道' },
            { text: '14.3 绩效报告', link: '/第14章 项目沟通管理/14.3 绩效报告' },
          ],
        },
        {
          text: '第15章 项目风险管理',
          collapsible: true,
          children: [
            { text: '15.1 风险规划', link: '/第15章 项目风险管理/15.1 风险规划' },
            { text: '15.2 风险识别', link: '/第15章 项目风险管理/15.2 风险识别' },
            { text: '15.3 风险应对', link: '/第15章 项目风险管理/15.3 风险应对' },
          ],
        },
        {
          text: '第16章 项目采购管理',
          collapsible: true,
          children: [
            { text: '16.1 采购规划', link: '/第16章 项目采购管理/16.1 采购规划' },
            { text: '16.2 合同管理', link: '/第16章 项目采购管理/16.2 合同管理' },
            { text: '16.3 合同收尾', link: '/第16章 项目采购管理/16.3 合同收尾' },
          ],
        },
        {
          text: '第17章 项目干系人管理',
          collapsible: true,
          children: [
            { text: '17.1 干系人识别', link: '/第17章 项目干系人管理/17.1 干系人识别' },
            { text: '17.2 干系人分析', link: '/第17章 项目干系人管理/17.2 干系人分析' },
            { text: '17.3 干系人沟通', link: '/第17章 项目干系人管理/17.3 干系人沟通' },
          ],
        },
        {
          text: '第18章 项目绩效域',
          collapsible: true,
          children: [
            { text: '18.1 绩效域概述', link: '/第18章 项目绩效域/18.1 绩效域概述' },
            { text: '18.2 交付绩效域', link: '/第18章 项目绩效域/18.2 交付绩效域' },
            { text: '18.3 相关方绩效域', link: '/第18章 项目绩效域/18.3 相关方绩效域' },
          ],
        },
        {
          text: '第19章 配置与变更管理',
          collapsible: true,
          children: [
            { text: '19.1 配置管理', link: '/第19章 配置与变更管理/19.1 配置管理' },
            { text: '19.2 变更管理', link: '/第19章 配置与变更管理/19.2 变更管理' },
            { text: '19.3 版本控制', link: '/第19章 配置与变更管理/19.3 版本控制' },
          ],
        },
        {
          text: '第20章 高级项目管理',
          collapsible: true,
          children: [
            { text: '20.1 大型项目管理', link: '/第20章 高级项目管理/20.1 大型项目管理' },
            { text: '20.2 项目集管理', link: '/第20章 高级项目管理/20.2 项目集管理' },
            { text: '20.3 项目组合管理', link: '/第20章 高级项目管理/20.3 项目组合管理' },
          ],
        },
        {
          text: '第21章 项目管理科学基础',
          collapsible: true,
          children: [
            { text: '21.1 数学基础', link: '/第21章 项目管理科学基础/21.1 数学基础' },
            { text: '21.2 经济分析', link: '/第21章 项目管理科学基础/21.2 经济分析' },
            { text: '21.3 运筹学', link: '/第21章 项目管理科学基础/21.3 运筹学' },
          ],
        },
        {
          text: '第22章 组织通用治理',
          collapsible: true,
          children: [
            { text: '22.1 组织治理', link: '/第22章 组织通用治理/22.1 组织治理' },
            { text: '22.2 战略管理', link: '/第22章 组织通用治理/22.2 战略管理' },
            { text: '22.3 合规管理', link: '/第22章 组织通用治理/22.3 合规管理' },
          ],
        },
        {
          text: '第23章 组织通用管理',
          collapsible: true,
          children: [
            { text: '23.1 管理学基础', link: '/第23章 组织通用管理/23.1 管理学基础' },
            { text: '23.2 人力资源', link: '/第23章 组织通用管理/23.2 人力资源' },
            { text: '23.3 财务管理', link: '/第23章 组织通用管理/23.3 财务管理' },
          ],
        },
        {
          text: '第24章 法律法规与标准规范',
          collapsible: true,
          children: [
            { text: '24.1 法律法规', link: '/第24章 法律法规与标准规范/24.1 法律法规' },
            { text: '24.2 标准规范', link: '/第24章 法律法规与标准规范/24.2 标准规范' },
            { text: '24.3 合规要求', link: '/第24章 法律法规与标准规范/24.3 合规要求' },
          ],
        },
      ],
    },
  }),
})

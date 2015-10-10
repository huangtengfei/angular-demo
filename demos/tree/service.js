app.factory("TreeData", function(){
    return {
        data: {
            "errorMsg": null,
            "errorTrace": null,
            "module": [
                {
                    "id": 0,
                    "parentId": -9999,
                    "name": "根目录",
                    "categoryCode": null,
                    "description": "root",
                    "type": "ROOT"
                },
                {
                    "id": 1,
                    "parentId": 0,
                    "name": "运营管理",
                    "categoryCode": null,
                    "description": "运营管理",
                    "type": "COMMON"
                },
                {
                    "id": 2,
                    "parentId": 0,
                    "name": "营销推广",
                    "categoryCode": null,
                    "description": "营销推广",
                    "type": "COMMON"
                },
                {
                    "id": 3,
                    "parentId": 0,
                    "name": "客户关系管理",
                    "categoryCode": null,
                    "description": "客户关系管理",
                    "type": "COMMON"
                },
                {
                    "id": 4,
                    "parentId": 0,
                    "name": "店铺装修",
                    "categoryCode": null,
                    "description": "店铺装修",
                    "type": "COMMON"
                },
                {
                    "id": 5,
                    "parentId": 0,
                    "name": "数据分析",
                    "categoryCode": null,
                    "description": "数据分析",
                    "type": "COMMON"
                },
                {
                    "id": 6,
                    "parentId": 0,
                    "name": "办公协同",
                    "categoryCode": null,
                    "description": "办公协同",
                    "type": "COMMON"
                },
                {
                    "id": 8,
                    "parentId": 1,
                    "name": "进销存",
                    "categoryCode": null,
                    "description": "进销存",
                    "type": "LEAF"
                },
                {
                    "id": 9,
                    "parentId": 1,
                    "name": "企业ERP",
                    "categoryCode": null,
                    "description": "企业ERP",
                    "type": "LEAF"
                },
                {
                    "id": 11,
                    "parentId": 2,
                    "name": "站内推广",
                    "categoryCode": null,
                    "description": "站内推广",
                    "type": "LEAF"
                },
                {
                    "id": 12,
                    "parentId": 2,
                    "name": "站外推广",
                    "categoryCode": null,
                    "description": "站外推广",
                    "type": "LEAF"
                },
                {
                    "id": 13,
                    "parentId": 2,
                    "name": "促销工具",
                    "categoryCode": null,
                    "description": "促销工具",
                    "type": "LEAF"
                },
                {
                    "id": 16,
                    "parentId": 3,
                    "name": "客户分析",
                    "categoryCode": null,
                    "description": "客户分析",
                    "type": "LEAF"
                },
                {
                    "id": 17,
                    "parentId": 3,
                    "name": "电话服务",
                    "categoryCode": null,
                    "description": "电话服务",
                    "type": "LEAF"
                },
                {
                    "id": 18,
                    "parentId": 4,
                    "name": "店铺插件",
                    "categoryCode": null,
                    "description": "店铺插件",
                    "type": "LEAF"
                },
                {
                    "id": 19,
                    "parentId": 4,
                    "name": "图片视频工具",
                    "categoryCode": null,
                    "description": "图片视频工具",
                    "type": "LEAF"
                },
                {
                    "id": 20,
                    "parentId": 5,
                    "name": "店铺分析",
                    "categoryCode": null,
                    "description": "店铺分析",
                    "type": "LEAF"
                },
                {
                    "id": 21,
                    "parentId": 5,
                    "name": "行业分析",
                    "categoryCode": null,
                    "description": "行业分析",
                    "type": "LEAF"
                },
                {
                    "id": 22,
                    "parentId": 6,
                    "name": "OA系统",
                    "categoryCode": null,
                    "description": "OA系统",
                    "type": "LEAF"
                },
                {
                    "id": 23,
                    "parentId": 6,
                    "name": "企业沟通",
                    "categoryCode": null,
                    "description": "企业沟通",
                    "type": "LEAF"
                },
                {
                    "id": 99,
                    "parentId": 3,
                    "name": "会员管理",
                    "categoryCode": null,
                    "description": "会员管理",
                    "type": "LEAF"
                },
                {
                    "id": 100,
                    "parentId": 3,
                    "name": "会员营销",
                    "categoryCode": null,
                    "description": "会员营销",
                    "type": "COMMOM"
                },
                {
                    "id": 114,
                    "parentId": 1,
                    "name": "商品管理",
                    "categoryCode": null,
                    "description": "商品管理",
                    "type": "LEAF"
                },
                {
                    "id": 399,
                    "parentId": 0,
                    "name": "云资源",
                    "categoryCode": "21880399",
                    "description": "",
                    "type": "COMMON"
                },
                {
                    "id": 400,
                    "parentId": 399,
                    "name": "IAAS",
                    "categoryCode": "21880400",
                    "description": "",
                    "type": "COMMON"
                },
                {
                    "id": 417,
                    "parentId": 399,
                    "name": "PAAS",
                    "categoryCode": "21880417",
                    "description": "",
                    "type": "COMMON"
                },
                {
                    "id": 424,
                    "parentId": 400,
                    "name": "计算",
                    "categoryCode": "21880424",
                    "description": "三级类目",
                    "type": "LEAF"
                },
                {
                    "id": 425,
                    "parentId": 400,
                    "name": "存储",
                    "categoryCode": "21880425",
                    "description": "三级类目",
                    "type": "LEAF"
                },
                {
                    "id": 426,
                    "parentId": 400,
                    "name": "网络",
                    "categoryCode": "21880426",
                    "description": "三级类目",
                    "type": "LEAF"
                },
                {
                    "id": 427,
                    "parentId": 417,
                    "name": "数据库",
                    "categoryCode": "21880427",
                    "description": "三级类目",
                    "type": "LEAF"
                },
                {
                    "id": 428,
                    "parentId": 417,
                    "name": "缓存",
                    "categoryCode": "21880428",
                    "description": "三级类目",
                    "type": "LEAF"
                }
            ],
            "success": true
        }
    }
})
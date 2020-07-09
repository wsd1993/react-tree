import { Children } from "react"

const case1 = {
    title: 'simplie case',
    data: [
        {
            value: 1,
            children: [
                {
                    value: 2
                }
            ]
        }
    ],
    result: [{
        "children": [{
            "value": 2
        }],
        "data": { "value": 1 },
        "isEnd": true,
        "isLeaf": false,
        "isStart": true,
        "parent": null,
        "pos": "0",
        "depth": 0
    }, 
    {
        "children": undefined,
        "data": { "value": 2 },
        "isEnd": true,
        "isLeaf": true,
        "isStart": true,
        "parent": {
            "children": [{
                "value": 2
            }],
            "data": {
                "value": 1
            },
            "isEnd": true,
            "isLeaf": false,
            "isStart": true,
            "parent": null,
            "pos": "0",
            "depth": 0
        },
        "pos": "0-0",
        "depth": 1
    }]
}

export const cases = [case1]
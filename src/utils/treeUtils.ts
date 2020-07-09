import { TreeNodeList, TreeNode } from 'types/tree'


// list: any 类型未构建
export function flattenTreeNode (
    list: any[],
    subProp: string = 'children'
) {
    const STACK: [number, TreeNode][] = [], res: TreeNodeList = []
    let i: number, depth: number = 0

    function isStart () {
        if (STACK.length === 0) {
            return i === 0
        } else {
            return STACK[STACK.length - 1][0] + 1 === STACK[STACK.length - 1][1]?.children?.length
        }
    }

    function isEnd () {
        if (STACK.length === 0) {
            return i === list.length - 1
        } else {
            return STACK[STACK.length - 1][0] === 0
        }
    }

    function getPos (): string {
        if (STACK.length === 0) {
            return `${i}`
        } else {
            const index = STACK.length - 1
            const curPos = STACK[index][1].children.length - STACK[index][0] - 1
            return `${STACK[index][1].pos}-${curPos}`
        }
    }

    function flatten (list: any[]) {
        for (i = 0; i < list.length; i++) {
            const children = list[i]?.children
            if (STACK.length === 0) {
                depth = 0
            }
            if (STACK.length && STACK[STACK.length - 1][0]) {
                STACK[STACK.length - 1][0]--
            } else if (STACK.length && STACK[STACK.length - 1][0] === 0) {
                STACK.pop()
                depth -= 1
            }
            const node: TreeNode = {
                parent: depth === 0?null:STACK[STACK.length - 1][1],
                pos: getPos(),
                data: list[i],
                isStart: isStart(),
                isEnd: isEnd(),
                isLeaf: !(Array.isArray(children) && children.length !== 0),
                children,
                depth
            }
            res.push(node)
            if (Array.isArray(children) && children.length !== 0) {
                STACK.push([children.length, node])
                depth++
                delete list[i].children
                list.splice(i + 1, 0, ...children)
            }
        }
        return res
    }
    return flatten(list)
}

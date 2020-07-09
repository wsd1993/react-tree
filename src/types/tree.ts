export interface TreeNode {
    parent: TreeNode | null
    pos: string
    isStart: boolean
    isEnd: boolean
    isLeaf: boolean
    data: any
    children: TreeNode[] | []
    depth: number
}

export type TreeNodeList = TreeNode[]
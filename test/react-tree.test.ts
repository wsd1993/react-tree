import DummyClass from "../src/react-tree"
import { flattenTreeNode } from '../src/utils/treeUtils'
import { cases } from './cases/treeFlatten'

/**
 * Dummy test
 */
describe("Dummy test", () => {
  it("works if true is truthy", () => {
    expect(true).toBeTruthy()
  })

  it("DummyClass is instantiable", () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })
})

describe("tree flatten test", () => {
  cases.forEach((item) => {
    const { title, data, result } = item
    it(title, () => {
      expect(flattenTreeNode(data)).toEqual(result)
    })
  })
})

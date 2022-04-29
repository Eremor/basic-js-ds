const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootThree = null;
  }

  root() {
    return this.rootThree;
  }

  add(data) {
    this.rootThree = addChild(this.rootThree, data);

    function addChild(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data ) {
        return node;
      }

      (node.data > data) ? node.left = addChild(node.left, data) : node.right = addChild(node.right, data);

      return node;
    }
  }

  has(data) {
    return isHas(this.rootThree, data);

    function isHas(node, data) {
      if(!node) return false;

      if(node.data === data) return true;

      return (node.data > data) ? isHas(node.left, data) : isHas(node.right, data);
    }
  }

  find(data) {
    return findData(this.rootThree, data);

    function findData(node, data) {
      if(!node) return null;

      if(node.data === data) return node;

      return (node.data > data) ? findData(node.left, data) : findData(node.right, data);
    }
  }

  remove(data) {
    this.rootThree = removeData(this.rootThree, data);

    function removeData(node, data) {
      if(!node) return null;

      if(node.data > data) {
        node.left = removeData(node.left, data);
        return node;
      } else if(node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) return null;

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while(maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }

        node.data = maxFromLeft.data;

        node.left = removeData(node.left, maxFromLeft.data);

        return node;
      }
    }
  }

  min() {
    if(!this.rootThree) return;

    let minData = this.rootThree;

    while(minData.left) {
      minData = minData.left;
    }

    return minData.data;
  }

  max() {
    if(!this.rootThree) return;

    let maxData = this.rootThree;

    while(maxData.right) {
      maxData = maxData.right;
    }

    return maxData.data;
  }
}

module.exports = {
  BinarySearchTree
};
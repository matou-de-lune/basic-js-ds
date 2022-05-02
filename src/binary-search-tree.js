const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (this.tree) return this.tree;
    return null;
  }

  add(data) {
    if (this.tree) {
      let curr = this.tree;
      while (true) {
        let d = data > curr.data ? 'right' : 'left';
        if (curr[d]) {
          curr = curr[d];
        } else {
          curr[d] = new Node(data);
          break;
        }
      }
    } else {
      this.tree = new Node(data);
    }
  }

  has(data) {
    let curr = this.tree;
    while (true) {
      if (data == curr.data) return true;
      let d = data > curr.data ? 'right' : 'left';
      if (curr[d]) {
        curr = curr[d];
      } else {
        return false;
      }
    }
  }

  find(data) {
    let curr = this.tree;
    while (true) {
      if (data == curr.data) return curr;
      let d = data > curr.data ? 'right' : 'left';
      if (curr[d]) {
        curr = curr[d];
      } else {
        return null;
      }
    }
  }

  remove(data) {
    let curr = this.tree;
    if (data == curr.data) {
      this.tree = null;
      return;
    }
    let d = data > curr.data ? 'right' : 'left';
    let next = curr[d];
    while (next) {
      if (data == next.data) {
        curr[d] = null;
        return;
      }
      d = data > curr.data ? 'right' : 'left';
      curr = next;
      next = curr[d];
    }
  }

  min() {
    let curr = this.tree;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.data;
  }

  max() {
    let curr = this.tree;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.data;
  }
}

module.exports = {
  BinarySearchTree
};
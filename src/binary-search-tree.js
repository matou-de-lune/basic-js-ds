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
    if (!curr) return false;
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
      this.tree = this.removeRoot(curr);
      return;
    }
    let d = data > curr.data ? 'right' : 'left';
    let next = curr[d];
    while (true) {
      if (data == next.data) {
        curr[d] = this.removeRoot(next);
        return;
      }
      d = data > next.data ? 'right' : 'left';
      if (next[d]) {
        curr = next;
        next = next[d];
      } else {
        return null;
      }
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

  removeRoot(tree) {
    if (tree.left == null) return tree.right;
    if (tree.right == null) return tree.left;
    let curr = tree.right;
    let d = 'right';
    let prev = tree;
    while (curr.left) {
      d = 'left';
      prev = curr;
      curr = curr.left;
    }
    if (!curr.right) {
      prev[d] = null;
      curr.left = tree.left;
      curr.right = tree.right;
      return curr;
    } else {
      prev[d] = curr.right;
      curr.left = tree.left;
      curr.right = tree.right;
      return curr;
    }
  }
}

module.exports = {
  BinarySearchTree
};
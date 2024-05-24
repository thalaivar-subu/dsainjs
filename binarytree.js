class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(node) {
    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left == null) root.left = node;
      else this.insertNode(root.left, node);
    } else {
      if (root.right == null) root.right = node;
      else this.insertNode(root.right, node);
    }
  }
  remove(node) {
    this.removeNode(this.root, node);
  }
  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  removeNode(node, key) {
    if (node === null) return null;
    else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) return null;
      else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // Delete Node with 2 children with min node of right subtree
      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.removeNode(node.right, minNode);
    }
  }
  preOrder(node) {
    if (node !== null) {
      console.log(node);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  postOrder(node) {
    if (node !== null) {
      this.preOrder(node.left);
      this.preOrder(node.right);
      console.log(node);
    }
  }
  inOrder(node) {
    if (node !== null) {
      this.preOrder(node.left);
      console.log(node);
      this.preOrder(node.right);
    }
  }
}

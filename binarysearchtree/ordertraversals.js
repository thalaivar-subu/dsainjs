

const preorder = (root) => {
    const nodes = []
    if(root){
        nodes.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    return nodes;
}

const inorder = (root) => {
    const nodes = []
    if(root){
        inorder(root.left)
        nodes.push(root.val)
        inorder(root.right)
    }
    return nodes;
}

const postorder = (root) => {
    const nodes = []
    if(root){
        postorder(root.left)
        postorder(root.right)
        nodes.push(root.val)
    }
    return nodes;
}
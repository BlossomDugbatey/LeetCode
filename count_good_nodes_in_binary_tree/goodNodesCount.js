const goodNodes = (root, val=-Infinity) => {
    if (!root){
        return 0;
    }else{
        const max = Math.max(root.val, val);
        return goodNodes(root.left, max) + goodNodes(root.right, max) + (root.val >= val ? 1 : 0); 
    }
}
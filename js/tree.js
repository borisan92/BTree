/**
* @author bchaplygin
* @date 20.06.2016.
*/

$(function() {
    var Tree = function (value, color) {
        this.rightNode = null;
        this.leftNode = null;
        this.value = value;
        this.color = color;
    };

    Tree.prototype.insert = function (value) {
        var node = '';
        var isRightNode = false;
        if (this.value < value) {
            node = 'rightNode';
            isRightNode = true;
        } else {
            node = 'leftNode'
        }

        if (this[node] != null) {
            this[node].insert(value)
        } else {
            this[node] = new Tree(value, isRightNode ? 'green' : 'orange');


            if (this.children === undefined) {
                this.children = [];
            }
            isRightNode ? this.children.push(this[node]) : this.children.unshift(this[node]);
        }
    };

    Tree.prototype.traverse = function (func) {
        if (this.leftNode != null) {
            this.leftNode.traverse(func)
        }

        if(typeof func === 'function') {
            func(this)
        }

        if (this.rightNode != null) {
            this.rightNode.traverse(func);
        }
    };

});
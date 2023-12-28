let  reverseBookList = function (head){
    let prev = null;
    let cur = head;
    let next = null;
    while(cur){
        next = cur.next
        cur.next = prev;
        prev = cur;
        cur= cur.next;
    }
    head =prev;
    return head;
}
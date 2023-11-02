var mergeTwolist = function (l1,l2){
    let newList = new Listnode(0);

    let headOfNewList = newList;
    while(l1!= null&&l2!=null){
        if(l1.val<l2.val){
            newList.next=l1;
            l1=l1.next;
        }
        else{
            newList.next=l2;
            l2=l2.next;
        }
        newList =newList.next;
    }
    if(l1===null){
        newList.next=l2;

    }
    if(l2=== null){
        newList.next=l1;
    }

    return headOfNewList.next;
    

};
var isPalindrome = function (head) {
  //节点为空的情况不是回文链表
  let num = [];
  while (head) {
    num.append[head.val];
    head = head.next;
  }
  let l = 0;
  let r = num.length - 1;

  while (l <= r) {
    if (num[l] !== num[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

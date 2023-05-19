/**
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
    and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let resultList: ListNode;
  if (l1 && l2) {
    let i = 0;
    while (l1 || l2) {
      if (l1 && l2) {
        resultList = new ListNode(l1.val + l2.val);
      }
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
  }

  return null;
}

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

addTwoNumbers(l1, l2);

// l1: [2,4,3], l2: [5,6,4]
//

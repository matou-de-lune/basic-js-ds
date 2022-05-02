const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let node = this.queue;
    if (!this.queue) {
      this.queue = new ListNode(value);
    } else {
      while (node.next != null) {
        node = node.next;
      }
      node.next = new ListNode(value);
    }
  }

  dequeue() {
    let res = this.queue.value;
    this.queue = this.queue.next;
    return res;
  }
}

module.exports = {
  Queue
};

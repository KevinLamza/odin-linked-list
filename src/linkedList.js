export const LinkedList = class {
  constructor() {
    this.head = null;
  }
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(value);
    }
  }
  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let tmp = this.head;
      this.head = new Node(value, tmp);
    }
  }
  size() {
    if (this.head === null) {
      return 0;
    } else {
      let tmp = this.head;
      let length = 1;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
        length = ++length;
      }
      return length;
    }
  }
};

export const Node = class {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
};

// use debugger!!! to check

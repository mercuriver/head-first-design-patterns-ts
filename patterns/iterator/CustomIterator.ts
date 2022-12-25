interface CustomIterator<T> {
  hasNext(): boolean;
  next(): T;
}

export default CustomIterator;

import Observer from "./Observer";

interface Subject<T> {
  registerObserver(observer: Observer<T>): void;
  removeObserver(observer: Observer<T>): void;
  notiObservers(): void;
}

export default Subject;

import Observer from "./Observer";

interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notiObservers(): void;
}

export default Subject;

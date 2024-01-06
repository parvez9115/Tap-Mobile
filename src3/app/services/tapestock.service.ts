import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TapestockService {
  private messageSource = new BehaviorSubject<object>({name:"testing"});
  constructor() { }
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: object) {
    this.messageSource.next(message);
  }
}

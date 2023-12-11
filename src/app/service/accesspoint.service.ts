import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesspointService {
  @Output() onVisible: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { UseCase } from 'core';

import { Philosopher } from '../domain/philosopher';
import { PhilosopherRepository } from '../repositories/philosopher.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllPhilosophersUseCase implements UseCase<void, Philosopher> {
  constructor(private philosopherRepository: PhilosopherRepository) {}

  execute(params: void): Observable<Philosopher> {
    return this.philosopherRepository.getAllPhilosophers();
  }
}

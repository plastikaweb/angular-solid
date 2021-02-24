import { Injectable } from '@angular/core';
import { PhilosopherRepository } from '@philo/core/repositories/philosopher.repository';

import { Observable } from 'rxjs';

import { UseCase } from 'core';

import { Philosopher } from '../domain/philosopher';

@Injectable({
  providedIn: 'root',
})
export class GetPhilosopherByIdUseCase implements UseCase<number, Philosopher> {
  constructor(private philosopherRepository: PhilosopherRepository) {}

  execute(params: number): Observable<Philosopher> {
    return this.philosopherRepository.getPhilosopherById(params);
  }
}

import { Observable } from 'rxjs';

import { Philosopher } from '../domain/philosopher';

export abstract class PhilosopherRepository {
  abstract getPhilosopherById(id: number): Observable<Philosopher>;
  abstract getAllPhilosophers(): Observable<Philosopher>;
}

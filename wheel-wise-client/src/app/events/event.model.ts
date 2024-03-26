export interface CyclingEvent {
  eventId: string;
  title: string;
  subtitle: string;
  img: string;
  distance: string;
  difficultyLevel: DifficultyLevel;
  eventType: EventType;
  description: string,
  startDatetime: string,
  endDatetime: string,
  organizerId: string,
  routeId: string
}

export enum EventType {
  Competition = 'competition',
  Training = 'training'
}
export enum DifficultyLevel {
  Hard = 'hard',
  Medium = 'medium',
  Easy = 'easy'
}


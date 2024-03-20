export interface CyclingEvent {
  title: string;
  subtitle: string;
  img: string;
  distance: string;
  difficultyLevel: string;
  eventType: 'competition' | 'training';
  description: string,
  startDatetime: string,
  endDatetime: string,
  organizerId: string,
  routeId: string
}

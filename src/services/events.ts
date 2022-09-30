export type EventLocation = {
    streetName: string;
    reference: string;
}
export type EventHostDetails = {
    name: string;
    reference: string;
}
export interface Event {
    id: string;
    name: string;
    host: EventHostDetails;
    createdAt: string;
    updatedAt: string;
    startAt: string;
    endAt: string;
    location: EventLocation;
}

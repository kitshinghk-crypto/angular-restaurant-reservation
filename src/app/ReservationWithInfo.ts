import {Reservation} from './Reservation'

export interface ReservationWithInfo{
    restaurantId: number,
    name: string,
    reservation: Reservation[]
}
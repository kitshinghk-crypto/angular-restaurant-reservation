export interface Reservation {
    reservationId?: number;
    restaurantId: number;
    numOfPeople: number;
    customerName: string;
    phoneNumber: string;
    reservationDatetime: Date;
    createDatetime: Date;
  }
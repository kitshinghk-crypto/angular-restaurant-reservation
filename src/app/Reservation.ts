export interface Reservation {
    reservationId?: number;
    restaurantId: number;
    numOfPeople: number;
    customerName: string;
    phoneNumber: string;
    reservationDateTime: Date;
    createDateTime: Date;
  }
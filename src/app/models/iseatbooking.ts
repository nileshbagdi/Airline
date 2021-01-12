export interface ISeatbooking{
    PassengerID : number;
    FlightID : string;
    TicketID : number;
    Booking_date_time: Date;
    Class: string;
    Seat_no: string;
    Scheduled_date: Date;
    Start_location: string;
    Destination: string;
    BookingStatus: string
}
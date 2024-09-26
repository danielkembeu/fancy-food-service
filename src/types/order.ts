interface Order {
    id: string;
    menu: string; // Foreign key for the Menu table
    customer: string; // Foreign key for the User table
    paymentMethod: 'MoMo' | 'OM' | 'CASH' | 'CREDIT CARD';
    menuReview: number;
    deliveryLocation?: string;
}
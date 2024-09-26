export interface Menu {
    id: string;
    drink: string; // Foreign key for the Drink table
    food: string; // Foreign key for the Food table
    createdAt: Date;
    deliveryAt: Date;
    discount: number; // The discount for the menu, in decimal (0.3 = 30%)
    totalPrice: number;
}
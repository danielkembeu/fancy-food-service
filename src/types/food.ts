export interface Food {
    id: string;
    name: string;
    description: string;
    price: number;
    available: boolean;
    images: string[]; // ❌'https://images.d/...' // .✅['https://images.d/']
    foodCategoryId: string;
    session: 'MORNING' | 'AFTERNOON' | 'EVENING'; // Session will just accepts these 3 values.
}
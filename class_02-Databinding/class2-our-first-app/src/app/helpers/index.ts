export interface Person {
    firstName: string;
    lastName: string;
    age: number | string;
    petName?: string
}

export type SubjectType = "React" | "Angular"
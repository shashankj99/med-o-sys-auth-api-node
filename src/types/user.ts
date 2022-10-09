export enum Gender {
    male = "male",
    female = "female",
    others = "others",
}

export type User = {
    id: number,
    first_name: string,
    middle_name?: string,
    last_name: string,
    email: string,
    mobile: string,
    password?: string,
    gender: Gender,
    dob: Date,
    status: boolean,
    avatar?: string,
    created_at?: Date,
    updated_at?: Date,
}

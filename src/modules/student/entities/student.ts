import { Entity } from "@/kernel/types";

export type Student = Entity<string> & {
    name: string,
    lastname: string,
    studentId: string,
    email: string,
    career: string
}
import { Prisma, User } from "@prisma/client";
import NextAuth from "next-auth";

// Use the generated `User` type from Prisma
type PrismaUser = Prisma.UserGetPayload<{}>;

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
        } & DefaultSession["user"]; // Extend the default `user` type
    }

    interface User extends PrismaUser {} // Use Prisma's `User` type for NextAuth
}
